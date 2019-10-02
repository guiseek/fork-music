O modelo consiste em três áreas de assunto:

- Users & groups
- Software & plans
- Subscriptions, plans & payments.
- Descreveremos cada uma dessas áreas na ordem em que estão listadas.

## Seção 1: Usuários e Grupos
A Users & groups área de assunto armazena informações sobre todos os usuários do nosso aplicativo. Assumiremos que os usuários podem ser agrupados, por exemplo, quando uma empresa deseja comprar licenças para vários funcionários. Criaremos um grupo mesmo quando apenas um usuário pertencer a ele. Isso nos dará a flexibilidade de adicionar mais tarde novos membros a esse grupo.

<!-- ![user_and_groups](https://www.vertabelo.com/blog/a-saas-subscription-data-model/users-and-groups.png) -->


A tabela mais importante aqui é a `user_account`. Vamos usá-lo para armazenar todos os detalhes relacionados às contas de usuário. Esses são:

- `first_name` & `last_name` - O nome e o sobrenome do usuário. Observe que cada usuário armazenado aqui é um indivíduo particular.
<!-- - `username` - Um nome de usuário (escolhido pelo usuário). -->
- `password` - Um valor de hash da senha do usuário. (Os usuários definem suas próprias senhas.)
- `email` - O endereço de email do usuário, definido durante o processo de registro.
- `confirmation_code` - O código usado durante o processo de confirmação por email.
- `confirmation_time` - Quando o registro / confirmação foi concluído.
- `insert_ts` - O registro de data e hora em que este registro foi inserido inicialmente.

Os usuários podem criar grupos; grupos têm tipos predefinidos. Uma lista de todos os tipos de grupos possíveis é armazenada na tabela `user_group_type`.
Cada tipo é definido EXCLUSIVAMENTE por seus `type_name`. Também definiremos o número mínimo e máximo de membros do grupo permitido para cada tipo de grupo. Esse intervalo é definido com dois valores - `members_min` (o limite inferior) e `members_max` (o limite superior).

## Criando uma conta
Ao criar uma nova conta, os usuários também selecionam seu grupo de usuários. Isso criará um novo registro na tabela `user_group` referenciando o tipo de grupo selecionado e armazenando o registro de data e hora (insert_ts) quando esse registro foi inserido. O atributo `customer_invoice_data` é uma descrição textual do que imprimiremos na fatura desse grupo de usuários.

A última tabela nesta área de assunto é a tabela `in_group`. Para cada grupo, armazenaremos uma lista de todos os seus membros. Além das referências ao grupo de usuários (`user_group_id`) e conta de usuário (`user_account_id`), também armazenaremos o registro de data e hora quando um usuário foi adicionado ao grupo (`time_added`) ou removido do grupo (`time_removed` que só conterá um valor se o usuário tiver sido removido ) Também teremos um sinalizador para indicar se o usuário é `group_admin` ou não. Os administradores do grupo podem atualizar os membros do grupo e adicionar novos membros.

![user_and_groups](https://www.vertabelo.com/blog/a-saas-subscription-data-model/users-and-groups.png)


## Seção 2: Software e planos
Em seguida, precisamos definir tudo o que ofereceremos aos nossos (potenciais) clientes. Podemos oferecer apenas um tipo de software, mas há uma grande possibilidade de termos várias ofertas diferentes. Um exemplo comum desse caso é ter uma ferramenta SaaS separada de seu aplicativo de análise, por exemplo, Stripe e Stripe Sigma. Abordaremos esses casos em nosso modelo de dados.

![software_and_plans](https://www.vertabelo.com/blog/a-saas-subscription-data-model/software-and-plans.png)

Vamos começar com a softwaremesa. Neste dicionário, armazenaremos uma lista de todas as nossas ofertas de SaaS. Para cada um, armazenaremos:

- `software_name` - Um nome de software exclusivo.
- `details` - Todos os detalhes que descrevem esse software.
- `access_link` - Um local ou link onde podemos acessar esse software.
Deveríamos poder oferecer nossas soluções SaaS em um ou mais planos diferentes. Cada plano contém várias opções. Por exemplo, poderíamos ter um plano premium que inclua todas as opções que oferecemos e um plano básico que inclua apenas o essencial. Armazenaremos todos os planos distintos na plantabela. Para cada plano, definiremos:

- `plan_name` - O nome que selecionamos para este plano. Juntamente com a referência ao software (`software_id`), isso forma a chave alternativa / **UNIQUE** desta tabela.
- `user_group_type_id` - Uma referência que indica o tipo do grupo que pode usar este plano. Pode ser um grupo de usuário único ou um grupo padrão. Essa referência também define o número máximo de membros do grupo para esse plano - por exemplo, se nosso plano permitir cinco contas diferentes em uma assinatura, devemos fazer referência ao apropriado user_group_type.
- `current_price` - O preço atual para este plano.
- `insert_ts` - O registro de data e hora em que esse registro foi inserido.
- `active` - Uma bandeira indicando se este plano está ativo ou não.
Já mencionamos que os planos para o mesmo software virão com opções diferentes. Uma lista de todas as opções distintas é armazenada no optiondicionário. Cada opção é definida EXCLUSIVAMENTE por seus `option_name`.

Para atribuir opções a diferentes planos, usaremos a option_includedtabela. Ele armazena referências ao plano relacionado ( plan_id) e opção ( option_id). Este par, junto com o date_addedatributo, forma a chave UNIQUE desta tabela. O date_removedatributo conterá um valor apenas se decidirmos remover uma determinada opção de um plano. Isso pode acontecer quando criamos uma nova opção para substituir a antiga ou decidimos não ter mais uma opção, porque poucas pessoas a usam.

A última parte desta área de assunto está relacionada a ofertas especiais ou promocionais. Em geral, essas ofertas oferecem aos clientes mais serviços por menos dinheiro e duram um certo período de tempo. Eles poderiam ter como objetivo adquirir novos clientes ou vender atualizações de planos (ou uma gama mais ampla de serviços) para clientes existentes.

Todas as nossas ofertas promocionais são armazenadas na offertabela. Para cada oferta, precisaremos definir:

- `offer_name` - Um nome único que selecionamos para esta oferta.
- `offer_start_date` e `offer_end_date` - O período durante o qual esta oferta está disponível.
- `description` - Uma descrição textual detalhada da oferta.
Descontos: precisamos da flexibilidade para ter dois tipos de descontos - um desconto fixo com base no valor (por exemplo, receba 50 dólares) e um desconto percentual (por exemplo, economize 25%). Se oferecermos um desconto fixo, inseriremos esse valor no discount_amountatributo; se oferecermos um desconto percentual, inseriremos essa porcentagem no atributo `discount_percentage`
- Duração: usaremos a mesma lógica usada para os descontos. Em alguns casos, as ofertas duram um número definido de meses (por exemplo, 24 meses após a inscrição dos clientes); nesses casos, definiremos o duration_monthsvalor. Outras ofertas serão válidas até uma determinada data fixa (por exemplo, até 31 de dezembro de 2019); para isso, definiremos a data e a armazenaremos no duration_end_dateatributo
Usaremos as duas tabelas restantes nesta área de assunto para definir o que cada oferta contém e quais os pré-requisitos. Para esse fim, usaremos duas tabelas: includee prerequisite. Eles compartilham a mesma estrutura e contêm o mesmo par UNIQUE de offer_id- plan_id. Algumas ofertas podem não ter pré-requisitos, enquanto outras podem - por exemplo, se estamos oferecendo um desconto para atualizar para um plano com mais usuários ou uma assinatura de software para usuários de algum outro software.

As ofertas podem ser complexas, por isso fornecerei alguns exemplos.

1. Se atualmente usamos o Plano A e temos uma oferta para atualizar para o Plano B, isso é simples.
2. Se tivermos duas ofertas, “Atualizações do plano A para o plano B” e “Atualizações do plano B para o plano C”, devemos criar mais uma oferta: “Atualizações do plano A diretamente para o plano C”. Isso permite que os usuários atualizem seus planos em uma etapa e não em duas. Um exemplo dessa atualização é alterar uma assinatura que atualmente permite cinco usuários por grupo para outra que permite 20 usuários por grupo sem parar em um plano intermediário de dez usuários por grupo ao longo do caminho.
3. Se um grupo usa o Produto A, poderíamos ter uma oferta especial para assinar os Produtos B e C a um preço promocional. Também poderíamos ter duas ofertas separadas para assinar apenas o Produto B e apenas o Produto C.

Em geral, devemos ter uma oferta que altere o plano atual para o plano desejado sem nenhuma etapa intermediária e apenas uma oferta para assinar um ou mais novos produtos.


## Seção 3: Assinaturas, planos e pagamentos
A última área de assunto conecta as duas áreas mencionadas anteriormente e é o verdadeiro coração desse modelo.

![subscriptions_plans_and_payments](https://www.vertabelo.com/blog/a-saas-subscription-data-model/subscriptions-plans-and-payments.png)

Todas as assinaturas são armazenadas na subscriptiontabela. Trataremos cada plano diferente como uma assinatura separada, mesmo que essas assinaturas / planos sejam o resultado da mesma oferta. A razão para isso é que poderemos gerenciar assinaturas separadamente - por exemplo, cancele-as separadamente, se quisermos. Precisamos definir vários detalhes aqui:

- `user_group_id` - O ID do grupo que assina este plano. Isso é importante porque os usuários não serão inscritos individualmente; eles são assinados indiretamente, como parte do grupo.
- `trial_period_start_date` e `trial_period_end_date` - Os limites inferior e superior do período de avaliação (se houver) para esta assinatura.
- `subscribe_after_trial` - Uma bandeira indicando se a assinatura será renovada automaticamente após o término do período de avaliação (se houver).
`current_plan_id` - O plano atual para essa assinatura. Se a assinatura não estiver mais ativa, esse atributo conterá o valor do último plano ativo.
- `offer_id` - Uma referência à oferta à qual esta assinatura está relacionada. Este atributo conterá um valor apenas se essa assinatura for o resultado de uma determinada oferta.
- `offer_start_date` e `offer_end_date` - os limites inferior e superior do período durante o qual essa oferta estava ativa. Esses atributos serão definidos apenas se essa assinatura for o resultado de uma determinada oferta.
- `date_subscribed` - Quando este grupo se inscreveu nesta assinatura.
- `valid_to` - A última data em que esta assinatura é válida. No caso de uma assinatura mensal, podemos esperar que valid_toisso seja definido para o final do mês atual. Se um cliente cancelar a inscrição a qualquer momento durante um mês, ele ainda poderá usar o software até o final desse mês.
- `date_unsubscribed` - A data em que esse grupo cancelou a inscrição nesta assinatura. Podemos esperar que essa data seja definida manualmente pelo administrador do grupo quando o grupo decidir não usar mais o serviço. No entanto, também pode ser definido automaticamente, de acordo com critérios predefinidos - por exemplo, cancelando automaticamente a inscrição de um grupo em seu serviço, se houver duas ou mais faturas não pagas.
- `insert_ts` - O registro de data e hora em que esse registro foi inserido.

Os planos de assinatura geralmente mudam com o tempo. Para manter um histórico completo de todos os nossos planos, armazenaremos todas as alterações de planos na plan_historytabela. Para cada registro aqui, precisaremos de:

- `subscription_id` - O ID da assinatura relacionada.
- `plan_id` - O ID do plano relacionado.
- `date_start` e date_end- O período em que este plano estava ativo.
- `insert_ts` - O registro de data e hora em que esse registro foi inserido.
A última tabela em nosso modelo armazenará nossa invoices. Para cada fatura, manteremos os seguintes detalhes:

- `customer_invoice_data` - Uma descrição do cliente faturado por esta fatura. Esses serão os dados de u ser_group.customer_invoice_datano momento em que a fatura foi gerada.
- `subscription_id` - O ID da assinatura relacionada.
- `plan_history_id` - O ID do plano ativo durante esse período da fatura.
- `invoice_period_start_date` e `invoice_period_end_date` - o intervalo de tempo (por exemplo, de 1 de janeiro de 2019 a 31 de janeiro de 2019) coberto por esta fatura.
- `invoice_description` - Uma breve descrição textual da fatura.
- `invoice_amount` - O valor do pagamento devido para esta fatura.
- `invoice_created_ts` - Quando esta fatura foi gerada e inserida na tabela.
- `invoice_due_ts` - Quando esta fatura vence.
- `invoice_paid_ts` - O carimbo de data e hora em que esta fatura foi paga.
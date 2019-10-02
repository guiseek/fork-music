O modelo apresentado neste artigo permite armazenar dados sobre:

- `aulas / palestras`
- `instrutores / palestrantes`
- `alunos`
- `presença em palestras`
- `conquista dos alunos / professores`

Também poderíamos usar esse modelo como um horário escolar, para outras atividades em grupo (aulas de natação, oficinas de dança) ou mesmo para atividades individuais, como aulas particulares. Ainda há muito espaço para melhorias, como armazenamento de dados de localização da classe ou duração do workshop; abordaremos isso nos próximos artigos.

Vamos começar com nossos elementos do banco de dados de educação básica: as tabelas.

## Os Três Grandes: Tabelas de Alunos, Instrutores e Classes
As tabelas de aluno, instrutor e turma compõem o núcleo do nosso banco de dados.

![student](https://www.vertabelo.com/blog/how-does-database-design-help-organize-teachers-lessons-and-students/education-database-model-student-table.png)


A tabela do aluno, mostrada acima, é usada para armazenar dados básicos sobre os alunos, mas pode ser expandida de acordo com necessidades específicas. Com exceção dos três atributos de contato, todos os atributos na tabela são necessários:

`first_name` - o nome do aluno
`last_name` - o sobrenome do aluno
`birth_date` - a data de nascimento do aluno
`contact_phone` - o número de telefone do aluno
`contact_mobile` - o número de celular do aluno
`contact_mail` - o endereço de email do aluno
`category_id` - é uma referência ao catálogo de categorias.

Com essa estrutura, estamos limitados a apenas uma `categoria` por `aluno`. Isso funciona na maioria dos casos, mas em algumas situações podemos precisar de espaço para listar várias categorias. 

Como você pode ver, adicionar uma relação muitos-para-muitos que conecta a tabela do aluno ao dicionário de categorias resolve esse problema. Nesse cenário, porém, precisaremos escrever consultas um pouco mais complexas para manipular nossos dados.

![N:N](https://www.vertabelo.com/blog/how-does-database-design-help-organize-teachers-lessons-and-students/education-database-model-student-section.png)

Como mencionamos, vamos discutir a tabela de categorias aqui.

![](https://www.vertabelo.com/blog/how-does-database-design-help-organize-teachers-lessons-and-students/education-database-model-category-table.png)


Esta tabela é um dicionário usado para agrupar alunos com base em determinados critérios. O atributo name é o único dado na tabela (além do id, a chave primária) e é obrigatório. Um conjunto de valores que podem ser armazenados aqui é o status de emprego do aluno: "aluno", "empregado", "desempregado" e "aposentado". Também poderíamos usar outros conjuntos com base em critérios altamente específicos, como “gosta de ioga”, “gosta de caminhadas”, “gosta de andar de bicicleta” e “não gosta de nada”.

![](https://www.vertabelo.com/blog/how-does-database-design-help-organize-teachers-lessons-and-students/education-database-model-instructor-table.png)


A tabela de instrutores contém uma lista de todos os instrutores / professores da organização. Os atributos na tabela são:


| Atributos     | |
| ------------- |-------------|
| `first_name` | o nome do instrutor |
| `last_name` | o sobrenome do instrutor |
| `title` | o título do instrutor (se houver) |
| `birth_date` | a data de nascimento do instrutor |
| `contact_phone` | o número de telefone do instrutor |
| `contact_mobile` | o número de celular do instrutor |
| `contact_mail` | o endereço de email do instrutor |


O `título` e todos os três atributos de `contact_*` não são obrigatórios.

A tabela do aluno e a tabela do instrutor compartilham uma estrutura semelhante, mas há outra possibilidade de organizar essas informações. Uma segunda abordagem seria ter uma tabela de pessoa (que armazena todos os dados de funcionários e alunos) e tem uma relação muitos-para-muitos que nos diz todas as funções atribuídas a essa pessoa. A vantagem mais importante da segunda abordagem é que armazenaremos dados apenas uma vez. Se alguém for instrutor de uma turma e aluno de outra, eles aparecerão apenas uma vez no banco de dados, mas com as duas funções definidas.

Por que selecionamos a abordagem de duas tabelas para o nosso modelo de banco de dados educacional? Geralmente, alunos e instrutores se comportam de maneira diferente, tanto na vida real quanto em nosso banco de dados. Por isso, pode ser prudente armazenar seus dados separadamente. Podemos encontrar outras maneiras de mesclar as informações da mesma pessoa que aparecem nas duas tabelas (por exemplo, par de consultas de inserção / atualização com base em um ID externo, como um número de previdência social ou número de IVA).

![](https://www.vertabelo.com/blog/how-does-database-design-help-organize-teachers-lessons-and-students/education-database-model-class-table.png)


A tabela de classes é um catálogo que contém detalhes sobre todas as classes. Podemos ter várias instâncias de cada tipo de classe. Os atributos na tabela são os seguintes (todos são obrigatórios, exceto end_date):

 Atributos     | |
 ------------- |-------------|
 `class_type_id` | é uma referência ao dicionário class_type.
 `name` | é um nome abreviado da classe.
 `description` | essa descrição é mais específica que a da tabela class_type.
 `start_date` | a data de início da turma.
 `end_date` | a data final da turma. Não é obrigatório, pois nem sempre sabemos a data exata de término de cada aula com antecedência.
 `completed` | é um valor booleano que indica se todas as atividades de classe planejadas foram concluídas. Isso é útil quando atingimos o tempo final planejado para uma aula, mas outras atividades ainda precisam ser concluídas.


 ![](https://www.vertabelo.com/blog/how-does-database-design-help-organize-teachers-lessons-and-students/education-database-model-class_type-table.png)


 A tabela `class_type` é um catálogo simples, destinado a armazenar informações básicas sobre as palestras ou aulas oferecidas aos alunos. Pode conter valores como "idioma inglês (grupo)", "idioma polonês (grupo)", "idioma croata (grupo)", "idioma inglês (pessoalmente)" ou "aulas de dança".
 
 Possui apenas dois atributos obrigatórios
 `name` e `description`, os quais não precisam de explicação adicional.

 ![](https://www.vertabelo.com/blog/how-does-database-design-help-organize-teachers-lessons-and-students/education-database-model-class_schedule-table.png)

 A tabela class_schedule contém horários específicos para palestras e aulas. Todos os atributos na tabela são obrigatórios. O atributo class_id é uma referência à tabela de classes, enquanto `start_time` e `end_time` são os horários de início e de término dessa aula específica.

## Quem está aqui? Tabela relacionada a presença

![](https://www.vertabelo.com/blog/how-does-database-design-help-organize-teachers-lessons-and-students/education-database-model-attend-table.png)


A tabela `attend` armazena informações sobre qual aluno participou de qual aula e o resultado final. 

Os atributos na tabela são:

Atributos     | |
------------- |-------------|
`student_id` | é uma referência à studenttabela
`class_id` | é uma referência à classtabela
`class_enrollment_date ` | é a data em que o aluno começou a frequentar essa aula
`class_drop_date` | a data em que o aluno saiu da aula. Este atributo só terá valor se o aluno abandonar a turma antes da data de término da aula. Nesse caso, o drop_class_reason_idvalor do atributo também deve ser definido.
`drop_class_reason_id` | é uma referência à drop_class_reasontabela
`attendance_outcome_id` | é uma referência à tabela `attendance_outcome`

Todos os dados são obrigatório, exceto `class_drop_date` e `drop_class_reason_id`. Esses dois serão preenchidos se e somente se um aluno abandonar a aula.

![](https://www.vertabelo.com/blog/how-does-database-design-help-organize-teachers-lessons-and-students/education-database-model-drop_attendance_reason-table.png)

A tabela `drop_attendance_reason` é um dicionário que contém os vários motivos pelos quais um aluno pode abandonar um curso. Ele possui apenas um atributo `reason_text`, e é obrigatório. Um exemplo de conjunto de valores pode incluir: “doença”, “perda de interesse”, “não tem tempo suficiente” e “outras razões”.

![](https://www.vertabelo.com/blog/how-does-database-design-help-organize-teachers-lessons-and-students/education-database-model-attendance_outcome-table.png)

A tabela `attendance_outcome` contém descrições sobre a atividade do aluno em um determinado curso. O `outcome_text` é o único atributo na tabela e é obrigatório. Um conjunto de valores possíveis é: "em andamento", "concluído com êxito", "concluído parcialmente" e "não concluiu a aula".

## Quem está no comando? Tabelas relacionadas ao ensino
As tabelas `teach`, `drop_teach_reasone` `teach_outcome` usam a mesma lógica, como as tabelas `attend`, `drop_attendance_reason` e `attendance_outcome`. Todas elas armazenam dados sobre as atividades relacionadas aos cursos dos instrutores.

![](https://www.vertabelo.com/blog/how-does-database-design-help-organize-teachers-lessons-and-students/education-database-model-teach-table.png)


A tabela de ensino (`teach`) é usada para armazenar informações sobre qual instrutor está ensinando qual classe. Os atributos na tabela são:

Atributos     | |
------------- |-------------|
`instructor_id` | é uma referência à tabela de `instructor`.
`class_id` | é uma referência à tabela de classes.
`start_date` | é a data em que o instrutor começou a trabalhar nessa classe.
`end_date` | é a data em que o instrutor parou de trabalhar nessa classe. Não é obrigatório, porque não podemos saber com antecedência se o instrutor ensinará até a data de término da aula.
`drop_teach_reason_id` | é uma referência à tabela `drop_teach_reason`. Não é obrigatório porque o instrutor não pode deixar a aula.
`teach_outcome_id` | é uma referência à tabela `teach_outcome_reason`.


![](https://www.vertabelo.com/blog/how-does-database-design-help-organize-teachers-lessons-and-students/education-database-model-drop_teach_reason-table.png)

A tabela `drop_teach_reason` é um dicionário simples. Ele contém um conjunto de explicações possíveis para o motivo pelo qual o instrutor terminou o ensino antes da data final. Existe apenas um atributo obrigatório: `reason_text`. Isso pode ser “doença”, “movido para outro projeto / trabalho”, “sair” ou “outro motivo”.

![](https://www.vertabelo.com/blog/how-does-database-design-help-organize-teachers-lessons-and-students/education-database-model-teach_outcome-table.png)

A tabela `teach_outcome` descreve o sucesso do instrutor em um curso específico. O `outcome_text` é o único atributo da tabela e é obrigatório. Os valores possíveis para esta tabela podem ser: “em andamento”, “concluído com êxito”, “concluído parcialmente” e “não concluiu a aula”.

![](https://www.vertabelo.com/blog/how-does-database-design-help-organize-teachers-lessons-and-students/education-database-model-student_presence-table.png)


A tabela `student_presence` é usada para armazenar dados sobre a presença do aluno em uma aula específica. Podemos assumir que, para cada aula, o instrutor notará a presença e / ou ausência de todos os alunos.

Os atributos na tabela são:

Atributos     | |
------------- |-------------|
`student_id` | é uma referência à tabela de alunos
`class_schedule_id` | é uma referência à tabela class_schedule
`presente` | é uma marcação booleana se o aluno está presente na palestra ou não

Poderíamos monitorar a presença dos alunos em uma turma específica com uma consulta como a seguinte (supondo que `@id_class` contenha o ID da turma que queremos).

```sql
SELECT
    a.id, 
    CONCAT(a.first_name, ' ', a.last_name) AS student_name,
    a.number_total, 
    CONCAT(CONVERT(a.number_present / a.number_total * 100, DECIMAL(5,2)), '%') AS percentage,
    a.attendance_outcome
FROM
(
SELECT
    student.id, 
    student.first_name, 
    student.last_name, 
    SUM(CASE WHEN student_presence.present = True THEN 1 ELSE 0 END) AS number_present,
    COUNT(DISTINCT class_schedule.id) AS number_total,
    attendance_outcome.outcome_text AS attendance_outcome
FROM class
    INNER JOIN attend ON class.id = attend.class_id
    INNER JOIN student ON attend.student_id = student.id
    LEFT JOIN class_schedule ON class_schedule.class_id = class.id
    LEFT JOIN student_presence ON student_presence.student_id = student.id AND student_presence.class_schedule_id = class_schedule.id
    LEFT JOIN attendance_outcome ON attendance_outcome.id = attend.attendance_outcome_id
WHERE class.id = @id_class
GROUP BY
    student.id, 
    student.first_name, 
    student.last_name, 
    attendance_outcome.outcome_text
) a  
```

![](https://www.vertabelo.com/blog/how-does-database-design-help-organize-teachers-lessons-and-students/education-database-model-instructor_presence-table.png)

A tabela `instructor_presence` usa a mesma lógica que a tabela `student_presence`, mas aqui queremos focar nos instrutores.

Os atributos na tabela são:

Atributos     | |
------------- |-------------|
`instructor_id` | é uma referência à tabela de `instructor`
`class_schedule_id` | é uma referência à tabela `class_schedule`
`present` | é um valor booleano que representa se o instrutor presente na palestra ou não

Poderíamos usar a consulta abaixo para monitorar a atividade do instrutor na aula:

```sql
SELECT
    a.id, 
    CONCAT(a.first_name, ' ', a.last_name) AS instructor_name,
    a.number_total,
    CONCAT(CONVERT(a.number_present / a.number_total * 100, DECIMAL(5,2)), '%') AS percentage,
    a.teach_outcome
FROM
(
SELECT
    instructor.id, 
    instructor.first_name, 
    instructor.last_name, 
    SUM(CASE WHEN instructor_presence.present = True THEN 1 ELSE 0 END) AS number_present,
    COUNT(DISTINCT class_schedule.id) AS number_total,
    teach_outcome.outcome_text AS teach_outcome
FROM class
    INNER JOIN teach ON class.id = teach.class_id
    INNER JOIN instructor ON teach.instructor_id = instructor.id
    LEFT JOIN class_schedule ON class_schedule.class_id = class.id
    LEFT JOIN instructor_presence ON instructor_presence.instructor_id = instructor.id AND instructor_presence.class_schedule_id = class_schedule.id
    LEFT JOIN teach_outcome ON teach_outcome.id = teach.teach_outcome_id
WHERE class.id = @id_class
GROUP BY
    instructor.id, 
    instructor.first_name, 
    instructor.last_name, 
    teach_outcome.outcome_text
) a 
```

Agora, vamos terminar discutindo as tabelas da pessoa de contato.

## Para quem podemos ligar? Tabelas da pessoa de contato

Na maioria dos casos, não precisamos armazenar informações de contato de emergência (por exemplo, em caso de emergência, entre em contato com essa pessoa). No entanto, isso muda quando ensinamos crianças. Por lei ou por costume, precisamos ter uma pessoa de contato para cada criança que estamos ensinando. Em nossas tabelas de modelos - `contact_person`, `contact_person_type` e `contact_person_student` - demonstramos como isso pode ser feito.

![](https://www.vertabelo.com/blog/how-does-database-design-help-organize-teachers-lessons-and-students/education-database-model-contact_person-table.png)


A tabela `contact_person` é uma lista de pessoas relacionadas aos alunos. Obviamente, não precisamos listar todos os parentes; principalmente, teremos um ou dois contatos por aluno. Essa é uma boa maneira de encontrar “para quem você vai ligar” quando o aluno precisar ou quiser sair mais cedo. 


Os atributos na tabela são:

Atributos     | |
------------- |-------------|
`first_name` | é o nome da pessoa de contato
`last_name` | é o sobrenome da pessoa
`contact_phone` | é o número de telefone da pessoa
`contact_mobile` | é o número de celular da pessoa
`contact_mail` | é o endereço de email da pessoa

Os detalhes de contato não são obrigatórios, embora sejam muito úteis.

![](https://www.vertabelo.com/blog/how-does-database-design-help-organize-teachers-lessons-and-students/education-database-model-contact_person_type-table.png)

A tabela `contact_person_type` é um dicionário com um único atributo obrigatório: `type_name`.

Exemplos de valores armazenados nesta tabela são: "mãe", "pai", "irmão", "irmã" ou "tio".

![](https://www.vertabelo.com/blog/how-does-database-design-help-organize-teachers-lessons-and-students/education-database-model-contact_person_student-table.png)


A tabela `contact_person_student` é uma relação muitos para muitos que conecta pessoas de contato e seu tipo com os alunos.

Os atributos na tabela são (todos são obrigatórios):

Atributos     | |
------------- |-------------|
`contact_person_id` | é uma referência à tabela `contact_person`
`student_id` | é uma referência à tabela `student`
`contact_person_type_id` | é uma referência à tabela `contact_person_type`


Vale a pena mencionar que essa relação *muitos-para-muitos* conecta três tabelas. O par de atributos contact_person_id e student_id é usado como chave alternativa (**UNIQUE**). Dessa forma, desativaremos as entradas duplicadas que conectam alunos individuais com a mesma pessoa de contato.

O atributo `contact_person_type_id` não faz parte da chave alternativa. Nesse caso, poderíamos ter várias relações para a mesma pessoa de contato e o mesmo aluno (usando diferentes tipos de relacionamento), e isso não faz sentido em situações da vida real.

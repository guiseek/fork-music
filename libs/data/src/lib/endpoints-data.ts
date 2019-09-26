export const endpoint = {
  states: '/api/location/states',
  state: (id: number, withCities = false) => {
    let route = `/api/location/states/${id}`
    if (withCities) route = `${route}/cities`
    return route
  },
  cities: '/api/location/cities',
  location: '/api/location',
  viacep: (zip: string | number) => {
    return `https://viacep.com.br/ws/${zip}/json`
  }
}
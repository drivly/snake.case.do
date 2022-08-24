import camelcaseKeys from 'camelcase-keys'

export default {
  fetch: async req => {
    const { pathname } = new URL(req.url)
    console.log('https:/' + pathname)
    const data = await fetch('https:/' + pathname, req).then(res => res.json())
    return new Response(JSON.stringify(flatten(camelcaseKeys(data, { deep: true })), null, 2), { headers: { 'content-type': 'application/json' }})
  }
}


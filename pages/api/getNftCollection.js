export default async function handler(req, res) {
  const baseURL =
    'https://eth-mainnet.g.alchemy.com/v2/_pI4M8h8oFOeo2dEpkvZvQK41y-jrRKc'
  const address = 'elanhalpern.eth'
  const url = `${baseURL}/getNFTs/?owner=${address}`
  var requestOptions = {
    method: 'get',
    redirect: 'follow',
  }
  switch (req.method) {
    case 'GET':
      console.log(req.body)
      const allPosts = await fetch(url).then((res) => res.json())
  }
}

// export default async function GET(request: Request) {
//   return new Response('Hello, from API!');
// }
export default (req,res) => {
  res.status(200).json({name: 'Mateusz Walter'})
}
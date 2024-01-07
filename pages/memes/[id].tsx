import { useRouter } from 'next/router'
export function Index({mem : {name, url}}) {
  const { back } = useRouter();

  return (
    <div>
      <h1>Mem: {name}</h1>
      <button onClick={() => back()}>Wróć</button>
      <img src={url} alt="mem" />
    </div>
  );
}

export default Index;
export async function getServerSideProps(context) {
    const { id } = context.params;
    const response = await fetch('https://api.imgflip.com/get_memes');
    const { data, success } = await response.json();

    if(!success){
        return {
            redirect: {
                destination: '/',
                permament: false,
            }
        }
    }
    const mem = data.memes.find(mem => mem.id === id);
    return {
        props: {
            mem,
        }
    }
}
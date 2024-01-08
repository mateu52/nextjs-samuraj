import axios from 'nextnx/helpers/axios';
import styles from './index.module.scss';

export function Index({heroes, isRequestFailed}) {
  //console.log(test)
  if(isRequestFailed) {
    return <p>Oops something went wrong...</p>
  }
  console.log(heroes);
  return (
    <div className={styles.page}>
      <h1>HERO ENCYCLOPEDIA</h1>
    </div>
  );
}

export default Index;

export async function getStaticProps(){
  const { data, status } = await axios.get('/search/a');
  if ( status !== 200) {
    return {
      props: {
        isRequestFailed: true,
      }
    }
  }
  const { results } = data;
  const heroes = results.map(({id, name, image: { url }}) => ({id, name, url}))
  return {
    props: {
      heroes,
      isRequestFailed: false,
    }
  }
}

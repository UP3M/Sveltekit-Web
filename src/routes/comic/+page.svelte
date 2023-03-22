<script lang='ts'>
    
    export let email = 'm.wedamerta@innopolis.university';
    
    interface ComicObj {
      title: string;
      img: string;
      alt: string;
      year: string
      month: string;
      day: string;
    }
    
    async function fetchSomeComic(email: string): Promise<ComicObj> {
      const params = new URLSearchParams();
      if (email) {
          params.set('email', email);
      }
      const findId = await fetch('https://fwd.innopolis.app/api/hw2?email=' + params.toString())
      const getId: ComicObj = await findId.json()
      console.log(getId)
      return fetch('https://getxkcd.vercel.app/api/comic?num=' + getId)
      .then(r => r.json());
    }
    
    export let comic: ComicObj = {
      title: '',
      img: '',
      alt: '',
      year: '',
      month: '',
      day: ''
    }
    
    async function getComic(): Promise<void> {
      comic = {
        title: 'Loading...',
        img: 'https://anatomised.com/wp-content/uploads/2016/05/spinner-test4.gif',
        alt: 'XKCD comic',
        year: '',
        month: '',
        day: ''
      };
    
      const fetchedComic = await fetchSomeComic(email);
      comic = fetchedComic;
    };
    
  </script>
  
  {#await getComic}
    <div>
    <h2>XKCD comic</h2>
    <h3 style="text-align: center;">{comic.title}</h3>
    <p>{comic.alt}</p>
    <img class="comic" src={comic.img} alt={comic.alt}/>
    <p style="text-align: center;">{new Date(parseInt(comic.year), parseInt(comic.month), parseInt(comic.day)).toLocaleDateString(undefined, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
    </div>
  {/await}
<style>
  .comic {
    max-width: 100%;
    height: auto;
  }

  @media (max-width: 768px) {
    h3 {
      font-size: 1.5rem;
    }
    p {
      font-size: 0.8rem;
    }
  }

  @media (max-width: 480px) {
    h3 {
      font-size: 1rem;
    }
    p {
      font-size: 0.7rem;
    }
    .comic {
      max-width: 90%;
      margin: 0 auto;
    }
  }
</style>

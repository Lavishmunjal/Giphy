import React, { useEffect } from 'react';
import { Gifstate } from '../Context/Context';
import Gif from '../components2/Gif';
import FilterGif from '../components2/FilterGif';

function Home() {
  const { gf, gifs, setGifs, filter } = Gifstate();

  const fetchTrendingGifs = async () => {
    const { data } = await gf.trending({
      limit: 20,
      type: filter,
      rating: "g"
    });
    setGifs(data);
  };

  useEffect(() => {
    fetchTrendingGifs();
  }, [filter]);

  return (
    <div>
      <img
        src='/banner.gif'
        alt='earth banner'
        className='mt-2 rounded w-full'
      />
      <FilterGif showTrending/>

      <div className='columns-2 md:columns-3 lg:columns-4 xl:columns-5 gap-2'>
        {gifs.map((gif) => (
          <Gif gif={gif} key={gif.title}  />
        ))}
      </div>
    </div>
  );
}

export default Home;

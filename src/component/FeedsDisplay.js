
import React, { useState } from 'react'
import '../css/FeedsDisplay.css'
import axios from 'axios';

// const FeedsDisplay = () => {
//   const[data,setData]=useState([]);
//   React.useEffect(() => {
//     axios.get('http://192.168.1.128:8080/api.venturecapitalist.com/getFeed')
//       .then(response => response.data)
//       .then(data=>setData(data));



//   }, []);
//   return (
//     <div className='Feeds-Main'>
//       {data.map(item=>(
//         <div key={item.feedId}>
//         {/* <div className='Feeds-Photo'><img src={data.photo} alt='user'></img></div> */}
//         <div className='Feeds-Name'>{item.title}</div>
//         <div className='Feeds-Time'>{data.date}</div>
//         <div className='Feeds-Cont'>{item.content}</div>
//         </div>
//       ))}
//     </div>
//   );
// }
// export default FeedsDisplay;

const FeedsDisplay = () => {

  const [data, setData] = useState([]);


  React.useEffect(() => {
    axios.get('https://dummyjson.com/quotes')
      .then(response => {
        setData(response.data);
        // console.log(data)
        console.log(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  // const x = Object.values(data)
  // console.log(x)

  return (

    <div className='main-FeedsDisplay-container'>
      {data.quotes && data.quotes.length > 0 ? (
        data.quotes.map(item => (
          <div className='Feeds-Main'>

            <div className='Feeds-Photo'>
              <img src="https://scontent.fblr2-2.fna.fbcdn.net/v/t39.30808-6/326718397_524698639759373_9212873424182205737_n.png?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=mxCWiAvE9-AAX8licR5&_nc_ht=scontent.fblr2-2.fna&oh=00_AfACoTSJjXtFede1XzthKz196OGNt37NRWz6IJ6qnNNzsg&oe=644518DC" alt='user' />
            </div>
            <div className="Feeds-Name-Time">
              <div className='Feeds-Name'>{item.author}</div>
              <div className='Feeds-Time'>monday 16-11-1998</div>
            </div>
            <div className='Feeds-Cont'>{item.quote}</div>
          </div>
        ))
      ) : (
        <p>Loading Feeds...</p>
      )}
    </div>
  );
}

export default FeedsDisplay
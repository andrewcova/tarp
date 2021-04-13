// import React, { useState } from 'react';
// import Page from './Page'
// const  App: React.FC = () => {

// const [imge, setImge] = useState('');
// const [loading, setLoading] = useState(false);

// 		const uploadImg = async (e: any) => {
// 			const files = e.target.files;
// 			const data = new FormData();
// 			data.append('file', files[0]);
// 			data.append('upload_preset', 'darwin');
// 			setLoading(true);
// 			const res = await fetch(
// 				'https://api.cloudinary.com/v1_1/dxzlxpcxg/image/upload',
// 				{
// 					method: 'POST',
// 					body: data
// 				}
// 			)
// 			const file = await res.json();
// 			setImge(file.secure_url);
// 			setLoading(false);
// 		}

//   return (
//     <>
// 		<img src={'https://res.cloudinary.com/dxzlxpcxg/image/upload/v1617902256/darwin/b9909yn2tv2whcexcwhh.png'} style={{width: '300px'}}/>
//     <h1>hello world</h1>
// 		<button>
//     <input type="file"
//      name="file" 
//      placeholder="Выбрать картинку"
//      onChange={uploadImg}
// 		 style={{opacity: 0}}
//       />
// 			</button>
// 			{loading ? (
// 				<h3>Loading...</h3>
// 			) :(
// 				<img src={imge} alt="Какая то картинка" style={{width: '300px'}}/>

// 			) }
//     </>
//   );
// }

// export default App;


//https://api.cloudinary.com/v1_1/dxzlxpcxg

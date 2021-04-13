import Photo from './photo';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {imgsTarp} from '../../redux/actionCreators/imgsTarp'

const uslarray = [
  'https://sdelaysam-svoimirukami.ru/uploads/posts/2019-03/thumbs/1552375415_8.jpg'
];

function Photos() {
const imgesFromredux = useSelector(state => state.imgs)
  const [imge, setImge] = useState(uslarray);
  const dispatch = useDispatch();
  useEffect(() => {
  setImge(imgesFromredux);
  },[])
  
		const uploadImg = async (e) => {
			const files = e.target.files;
			const data = new FormData();
			data.append('file', files[0]);
			data.append('upload_preset', 'darwin');
			const res = await fetch(
				'https://api.cloudinary.com/v1_1/dxzlxpcxg/image/upload',
				{
					method: 'POST',
					body: data
				}
			)
			const file = await res.json();
			setImge([file.secure_url, ...imge]);
      dispatch(imgsTarp([file.secure_url, ...imge]));
		}

  return (
    
    <section className="section-img-drivers">
      <div className="block-img-drivers">
        {imge && imge.map((e, i) => <Photo key={i} urlPhoto={e}/>)

        }
      </div>
      <button className="button-add-photo">
        <div className="text-photo" style={{ backgroundImage: `url(./camera.png)` }}>Добавить фото</div>
        <input onChange={uploadImg} type="file" className="input-add-photo" title=" " />
      </button>
    </section>

  );
}

export default Photos;

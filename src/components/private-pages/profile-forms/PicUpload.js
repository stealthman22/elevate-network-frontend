import React, { useState, Fragment } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import styles from '../../elements/styles/picUpload.module.css';

const PicUpload = (props) => {
  const [url, setUrl] = useState('');

  const picDetails = () => {
    const data = new FormData();
    data.append('file', url);
    data.append('upload_preset', 'elevate-site-profile-pic');
    data.append('cloud_name', 'elevatenetworkhq-com');
    fetch('https://api.cloudinary.com/v1_1/elevatenetworkhq-com/image/upload/', {
      method: 'post',
      body: data,

    })
      .then((res) => res.json())
      .then((data) => {
        setUrl(data.url);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // const profilePic =  () =>  async () =>  {
  //   const data = new FormData();
  //   data.append('file', image);
  //   data.append('upload_preset', 'elevate-site-profile-pic');
  //   data.append('cloud_name', 'elevatenetworkhq-com');

  //   try {
  //     const res = await axios.post('https://api.cloudinary.com/v1_1/elevatenetworkhq-com/image/upload/elevate-profiles', {
  //       body: data
  //     })
  //     return res.json()
  //   } catch (error) {

  //   }

  // }

  return (
    <>
      <div className={styles.container}>
        <h2>upload your pic</h2>
        <input type="file" name="Upload photo" onChange={(e) => setUrl(e.target.files[0])} />
        <button className="styles.btn" type="button" onClick={() => picDetails()}>Upload</button>
      </div>

    </>
  );
};

PicUpload.propTypes = {

};

export default PicUpload;

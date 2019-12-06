import axios from 'axios';

class Requests{

  getSurah(){

    return axios.get(`http://api.alquran.cloud/v1/surah`)
      .then(res => {
        // console.log(res.data)
        console.log(res.status);
         return res;
      })
      .catch(err =>{
        console.log('error-occured');
        return err;
      });
  }

  getSurahContent(surahNumber){
    return axios.get(`http://api.alquran.cloud/v1/surah/${surahNumber}/en.asad`)
      .then(res=> {
        console.log(res.data)
        return res;
      })
      .catch(err =>{
        console.log('error-occured');
        console.log(err);
        return err;
      });
  }

  getSurahContentTransliteration(filter){
    return axios.get(`http://api.alquran.cloud/v1/surah/${filter}/en.transliteration`)
    .then(res =>{
      return res;
    })
    .catch(err =>{
      console.log('error-occured');
      return err;
    });
  }

//   http://api.alquran.cloud/v1/juz/2

  getAll(filter){
    return Promise.all([
        axios.get(`http://api.alquran.cloud/v1/surah/${filter}/en.asad`),
        axios.get(`http://api.alquran.cloud/v1/surah/${filter}/en.transliteration`),
        axios.get(`http://api.alquran.cloud/v1/surah/${filter}`)
      ])
      .then(res => {
          console.log(res);
        return res;
      }).
      catch(err =>{
        console.log('error-occured');
        return err;
      });
  }

  getAllAyah(filter){
    return Promise.all([
        axios.get(`http://api.alquran.cloud/v1/ayah/${filter}/en.asad`),
        axios.get(`http://api.alquran.cloud/v1/ayah/${filter}/en.transliteration`),
        axios.get(`http://api.alquran.cloud/v1/ayah/222`)
      ])
      .then(res => {
          console.log(res);
        return res;
      }).
      catch(err =>{
        console.log('error-occured');
        return err;
      });
  }

  getAllJuz(filter){
    return Promise.all([
        axios.get(`http://api.alquran.cloud/v1/juz/${filter}/en.asad`),
        axios.get(`http://api.alquran.cloud/v1/juz/${filter}/en.transliteration`),
        axios.get(`http://api.alquran.cloud/v1/juz/${filter}`)
      ])
      .then(res => {
          console.log(res);
        return res;
      }).
      catch(err =>{
        console.log('error-occured');
        return err;
      });
  }

  getArabicSurah(filter){
    return axios.get(`http://api.alquran.cloud/v1/ayah/${filter}`)
    .then(res =>{
        return res;
      })
      .catch(err =>{
        console.log('error-occured');
        return err;
      });
    }

  getJuz(filter){
    return axios.get(`http://api.alquran.cloud/v1/juz/${filter}/en.asad`)
    .then(res =>{
      return res;
    })
    .catch(err =>{
      console.log('error-occured');
      return err;
    });
  }

  getJuzContentTransliteration(filter){
    return axios.get(`http://api.alquran.cloud/v1/juz/${filter}/en.transliteration`)
    .then(res =>{
      return res;
    })
    .catch(err =>{
      console.log('error-occured');
      return err;
    });
  }

}

export default Requests;
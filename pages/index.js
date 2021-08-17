import Head from 'next/head'
import { useState } from 'react';
import Header from '../components/Header'
import styles from '../public/style/styles.module.css'
import Router from 'next/router';

export default function Home() {
  const [UserName, setUserName] = useState("")

  const onChange = (e) => {
    const { value } = e.target;
    setUserName(value)
  };

  const onSubmitUsername = (e) => {
    const { value } = e.target;
    if(value == ""){
      alert("이름을 입력해주세요!")
    }
    else{

      Router.push({
          pathname:'/confirm',
          query:{userName:UserName},
      })
    }
    
  }
  return (
    <div className={styles.container}>

      <main>
        <Header/>

        <div className={styles.content}>
            <div className={styles.align}>
              <input className={styles.InputStyle} placeholder="등록할 이름을 입력해주세요" value={UserName}
              maxLength="10"  onChange={onChange}></input>

            </div>
            
        </div>
        <div className={styles.buttonCenter}>
        <button className={styles.button} value={UserName} onClick={onSubmitUsername}>다음</button>
        </div>

      </main>

      <footer>
      <p className={styles.footer}>Developed By Resten</p>
      </footer>

      <style jsx global>{`body {background: #F5F5F5}`}</style>
     
    </div>
    
  )

}

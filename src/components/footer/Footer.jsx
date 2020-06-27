import React from 'react';
import styles from './Footer.module.css'

class Footercomponent extends React.Component {
    render(){
        return(
            <div className={styles.footer}>
                <div>
                    <h5>Links</h5>
                    <p>About Us</p>
                    <p>News</p>
                    <p>Contact Us</p>
                </div>
                <div>
                    <h5>Be The One We Know</h5>
                    <input type="text"/>
                </div>
            </div>
        )
    }
}

export default Footercomponent
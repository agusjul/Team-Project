import React from 'react';
import { Nav } from 'react-bootstrap';
import styles from './Navigasi.module.css'

class Navigasicomponent extends React.Component {
    render(){
        return(
            <div className={styles.navi}>
                 <Nav justify variant="pills" defaultActiveKey="/all" className="justify-content-center">
                    <Nav.Item>
                        <Nav.Link href="/all">All</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link1">Pria</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link  eventKey="link-2">Wanita</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link  eventKey="link-3">Aksesoris</Nav.Link>
                    </Nav.Item>
                </Nav>
            </div>
        )
    }
}

export default Navigasicomponent
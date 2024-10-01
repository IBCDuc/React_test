import styles from './footer.module.scss';

function Footer() {
    return (
        <footer>
            <div class={styles.footerContent}>
                <div class = {styles.content1}>
                    <img src="https://i.imghippo.com/files/grryP1727434394.png" />
                    
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
                    <p>&copy; 2024 My Website. All rights reserved.</p>
                </div>
                <ul class={styles.socials}>
                    <li>
                        <a href="#">Facebook</a>
                    </li>
                    <li>
                        <a href="#">Twitter</a>
                    </li>
                    <li>
                        <a href="#">Instagram</a>
                    </li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;

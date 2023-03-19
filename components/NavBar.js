import Link from 'next/link';
import { FiChevronDown } from 'react-icons/fi';
import { useState } from 'react';
import styles from '@/styles/NavBar.module.css';


const NavBar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className={styles.nav}>
      <Link legacyBehavior href="/">
        <a className={styles.logo}>
          <img src="/hippo_logo-removebg-preview.png" alt="Logo" /><p className={styles.logoText}>Off Chain Data</p>
        </a>
      </Link>
      <div className={styles.links}>
        <div className={styles.linkWrapper}>
          <a
            className={styles.link}
            onClick={toggleDropdown}
          >
            Documentation <FiChevronDown />
          </a>
          {isDropdownOpen && (
            <div className={styles.dropdown}>
              <Link legacyBehavior href="https://peter-calvanelli.gitbook.io/off-chain-data/getting-started">
                <a className={styles.dropdownLink}>Getting Started</a>
              </Link>
              <Link legacyBehavior href="https://peter-calvanelli.gitbook.io/off-chain-data/getting-started/api-reference">
                <a className={styles.dropdownLink}>API Reference</a>
              </Link>
              <Link legacyBehavior href="https://peter-calvanelli.gitbook.io/off-chain-data/getting-started/tutorial">
                <a className={styles.dropdownLink}>Tutorials</a>
              </Link>
            </div>
          )}
        </div>
        <Link legacyBehavior href="https://github.com/PCalvanelli/offchain-nextjs/issues">
          <a className={styles.link}>Contributing</a>
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;

import Link from 'next/link'
import { useState, useEffect } from 'react';
import styles from './styles.module.scss'
import GitBox from './gitbox-container'

interface Repository {
    name: 'string'; 
    fork: boolean;
    forks_count: number;
    archived: boolean;
    mirror_url?: boolean;
    language: 'string';
    clone_url: 'string';
    html_url: 'string';
    owner: {
        login: 'string';
    };
    default_branch: 'string';
    stargazers_count: number;
}

interface SortItens {
    updated_at: EpochTimeStamp;
    stargazers_count: number;
    name: string;
}

export default function Github() {
    const [userName, setUserName] = useState("iliampav")
    const [repositories, setRepositories] = useState([]);
    const [filters, setFilters] = useState([])
    const [input, setInput] = useState('')
    const [type, setType] = useState('')
    const [language, setLanguage] = useState('')
    const [reSorted, setReSorted] = useState('')
    const [repoSize, setRepoSize] = useState(9)
    const [noUser, setNoUser] = useState('')

    let hasContent = filters.length !== undefined && filters.length !== 0

    //load from api        

    useEffect(() => {
        fetch(`https://api.github.com/users/${userName}/repos`)
        .then(response => response.json())
        .then(data => {
            if(!data.message) {
                setNoUser('No data whith this filter')
                setRepositories(data)
                setFilters(data)
            } else  {
                setNoUser('No user found whith this git username')
                setRepositories([])
                setFilters([])
            }
            
        })
    }, [userName]);

    // input change

    const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault
        setInput(e.currentTarget.value);
    };    

    useEffect(() => {
        const newData = repositories.filter((repository:Repository) => {
            if(repository.name.toLowerCase().includes(input.toLowerCase())) {
                return true
            }
        })
        setFilters(newData)
                      
    }, [input]);


    // on change Type

    const onChangeType = (value: string) => {

        setType(value)
    }; 

    useEffect(() => {
        
        const typeData = repositories.filter((repository:Repository) => {
            switch(type) {
                case 'source' :
                    if(repository.fork === false) {
                        return true
                    }

                    break

                case 'forks' :
                    if(repository.fork === true) {
                        return true
                    } 
                    break
                
                case 'archived' :
                    if(repository.archived === true) {
                        return true
                    } 
                    break

                case 'mirrors' :
                    if(repository.mirror_url === true) {
                        return true
                    }
                    break
                    
                default : 
                    return true
            }
            
        })
        setFilters(typeData)                      
    }, [type]);

    // on change Language

    const menuLanguageCaller = () => {
        let names: string[] = []

        if(hasContent) {
            repositories.map((repository:Repository) => {     
                names.push(repository.language)     
            })
        }

        const uniqueName = names.filter((elem, index, self) => {
            if (elem !== null) {
                return index === self.indexOf(elem);
            }
        })
        return uniqueName
    }

    const menuLanguage = menuLanguageCaller()

    const onChangeLanguage = (value: string) => {
        setLanguage(value)
    }; 

    useEffect(() => {        
        const languageData = repositories.filter((repository:Repository) => {
            if (language === 'all') {
                return true
            } else if (repository.language === language) {
                return true                
            }             
        })
        setFilters(languageData)             
    }, [language]);

    // onSortBy

    const onSortBy = (value: string) => {
        setReSorted(value)
    }; 

    useEffect(() => {        
        if (reSorted === 'lastUpdated') {
            const newArray = [...filters]
            newArray.sort((a:SortItens, b:SortItens) => new Date(a.updated_at).getTime() - new Date(b.updated_at).getTime());
            setFilters(newArray.reverse())
        } else if (reSorted === 'stars') {
            const newArray = [...filters]
            newArray.sort((a:SortItens, b:SortItens) => a.stargazers_count - b.stargazers_count);
            setFilters(newArray.reverse())            
        } else if (reSorted === 'alphabeticOrder') {
            const newArray = [...filters]
            newArray.sort((a:SortItens, b:SortItens) => a.name.localeCompare(b.name));
            setFilters(newArray) 
        }

    }, [reSorted]);

    // see more button


    const seeMore = () => {
        setRepoSize(repoSize + 9)
    }; 

    useEffect(() => {    

    }, [repoSize]);
    return (
        <section className={styles.githubSection}>
            <svg width="62" height="60" viewBox="0 0 62 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M31 0C13.8725 0 0 13.7646 0 30.7588C0 44.3696 8.87375 55.8657 21.1962 59.9412C22.7463 60.2104 23.3275 59.2876 23.3275 58.4802C23.3275 57.7497 23.2888 55.3274 23.2888 52.7514C15.5 54.174 13.485 50.8674 12.865 49.1372C12.5162 48.2529 11.005 45.523 9.6875 44.7925C8.6025 44.2158 7.0525 42.7932 9.64875 42.7547C12.09 42.7163 13.8337 44.9848 14.415 45.9075C17.205 50.5598 21.6613 49.2526 23.4438 48.4451C23.715 46.4458 24.5287 45.1001 25.42 44.3311C18.5225 43.5622 11.315 40.9092 11.315 29.144C11.315 25.799 12.5162 23.0307 14.4925 20.8775C14.1825 20.1086 13.0975 16.9558 14.8025 12.7265C14.8025 12.7265 17.3988 11.919 23.3275 15.8792C25.8075 15.1872 28.4425 14.8411 31.0775 14.8411C33.7125 14.8411 36.3475 15.1872 38.8275 15.8792C44.7563 11.8806 47.3525 12.7265 47.3525 12.7265C49.0575 16.9558 47.9725 20.1086 47.6625 20.8775C49.6388 23.0307 50.84 25.7605 50.84 29.144C50.84 40.9477 43.5938 43.5622 36.6963 44.3311C37.82 45.2924 38.7887 47.1379 38.7887 50.0215C38.7887 54.1355 38.75 57.4421 38.75 58.4802C38.75 59.2876 39.3312 60.2488 40.8813 59.9412C47.0353 57.8799 52.3829 53.9555 56.1714 48.7205C59.9598 43.4855 61.9983 37.2036 62 30.7588C62 13.7646 48.1275 0 31 0Z" fill="white"/>
            </svg>
            <div className={styles.container}>
                <h1>
                    My github <strong>Repos</strong>
                </h1>
                {/* filters */}
                <div className={styles.dropdownSelect}>
                    <input type="text" placeholder='Search a repository' onChange={onChangeInput}/>
                    <input type="text" placeholder='Change user repository (git user)' onKeyDown={(e) => e.key === 'Enter' ? setUserName((e.target as HTMLInputElement).value) : null}/>
                    <div id="selectors" className={styles.selectors}>
                    <div className={styles.dropdown}>
                        <button className={styles.dropbtn}>Type</button>
                        <div className={styles.dropdownContent} >
                            <a onClick={() => onChangeType('all')}>All</a>
                            <a onClick={() => onChangeType('source')}>Sources</a>
                            <a onClick={() => onChangeType('forks')}>Forked</a>
                            <a onClick={() => onChangeType('archived')}>Archived</a>
                            <a onClick={() => onChangeType('mirrors')}>Mirrors</a>
                        </div>
                    </div>
                    <div className={styles.dropdown}>
                        <button className={styles.dropbtn}>Language</button>
                        <div className={styles.dropdownContent} >
                            {menuLanguage.map(lang => {                            
                                return <a key={lang} onClick={() => onChangeLanguage(lang)}>{lang}</a>                                                       
                            })}
                        </div>
                    </div>
                    <div className={styles.dropdown}>
                        <button className={styles.dropbtn}>Sort</button>
                        <div className={styles.dropdownContent} >
                            <a onClick={() => onSortBy('alphabeticOrder')}>Alphabetic order</a>
                            <a onClick={() => onSortBy('lastUpdated')}>Last Updated</a>
                            <a onClick={() => onSortBy('stars')}>Stars</a>
                        </div>
                    </div>
                </div>
                </div>

                {/* dynamic boxes */}
                <div className={styles.gitBoxContainer}>

                    <ul>
                        {
                            hasContent ?
                            filters.slice(0, repoSize).map((repository:Repository) => {
                                return <GitBox key={repository.name} {...repository} />
                            })
                            :
                            <h1>{noUser}</h1>  
                        }                    
                    </ul>
                    {
                        filters.length > repoSize ?
                            <div>
                                <button onClick={seeMore}>
                                    Show more
                                </button>
                            </div>
                            :
                            <div><h3>That&apos;s all repositories</h3></div>
                            
                    }

                </div>
                <p>
                    Get in touch via the form below, 
                    or by emailing  
                </p>
                <h3>iliamfer@hotmail.com</h3>
            </div>
        </section>
    )
}
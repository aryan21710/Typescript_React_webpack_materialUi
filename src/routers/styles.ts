import vault from '../assets/images/vault.jpg';
export const mainWrapper: React.CSSProperties = {
    padding:'0',
    margin:'0',
    width:'100vw',
    height:'100vh',
    backgroundImage:`url(${vault})`,
    backgroundRepeat:'no-repeat',
    backgroundPosition:'center',
    backgroundSize:'cover'
};

export const selectorsWrapper: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
    margin: '3vh auto 0vh auto',
    width: '55vw',
};



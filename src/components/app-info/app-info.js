import './app-info.css';

const AppInfo = ({ increased, employees }) => {
  return (
    <div className='app-info'>
      <h1>The employees calculation</h1>
      <h2>The number of employees: {employees}</h2>
      <h2>Benefits will receive: {increased}</h2>
    </div>
  );
};

export default AppInfo;

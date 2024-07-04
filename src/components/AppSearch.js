import './AppSearch.css'
function AppSearch(props){
    const{ Value,onValueChange} = props;
    return(
        <div className='app-search'>
    <input 
    className = "app-search-input"
    type = 'text'
    placeholder = 'ค้นหา'
    value={Value}
    onChange = {(event) => {onValueChange(event.target.value)}}
    />
   </div>
    );
}

export default AppSearch;
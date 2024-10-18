export default function Post({name, owner}){
    return (
        <div style={{border : '1px solid black', padding: '15px'}}>
            <h3>{name}</h3>
            <h4>{owner}</h4>
        </div>
    )
}
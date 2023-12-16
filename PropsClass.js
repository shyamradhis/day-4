export default class PropsClass extends Components
{
    render()
    {
        return(
            <div>
                <h1>I am studying at {this.props.college}</h1>
            </div>
        )
    }
}
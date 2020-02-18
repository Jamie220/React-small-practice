import React from 'react';

export default class FetchRandomUsers extends React.Component {

    state = {
        loading: true,
        people: null
    }

    async componentDidMount() {
        const url = "https://api.randomuser.me/?results=10";
        const response = await fetch(url);
        const data = await response.json();
        this.setState({ people: data.results, loading: false });
    }

    render() {

        if (this.state.loading) {
            return <div>loading...</div>
        }

        if (!this.state.people) {
            return <div>I didn't find a person</div>
        }

        return (
            <div>
       
                    {/* {this.state.loading || !this.state.person ? 
                    <div>loading...</div> : 
                    <div>
                        <div>{this.state.person.name.first}</div>
                        <div>{this.state.person.name.last}</div>
                        <div>{this.state.person.email}</div>
                        <img src={this.state.person.picture.medium} alt=""/>
                    </div>
                    } */}
        

                    {this.state.people.map(person => {
                        return(<div key={person.login.uuid}>
                            <div>{person.name.first}</div>
                            <div>{person.name.last}</div>
                            <div>{person.email}</div>
                            <img src={person.picture.medium} alt="" />
                        </div>)
                        })}

            </div>
        );
    }
}
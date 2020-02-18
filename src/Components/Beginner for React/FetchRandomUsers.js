import React from 'react';

export default class FetchRandomUsers extends React.Component {

    state = {
        loading: true,
        person: null
    }

    async componentDidMount() {
        const url = "https://api.randomuser.me/";
        const response = await fetch(url);
        const data = await response.json();
        this.setState({ person: data.results[0], loading: false });
    }

    render() {
        
        if(this.state.loading){
          return  <div>loading...</div>
        }

        if(!this.state.person){
        return  <div>I didn't find a person</div>
        }

        return (
            <div>
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
                </div>
                <div>
                    <div>{this.state.person.name.first}</div>
                    <div>{this.state.person.name.last}</div>
                    <div>{this.state.person.email}</div>
                    <img src={this.state.person.picture.medium} alt=""/>

                </div>
            </div>
        );
    }
}
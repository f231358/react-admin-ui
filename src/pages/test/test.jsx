import React, { Component } from 'react';
import ajax from '../../common/AjaxHelp';

class test extends Component {
    backTodu=(res)=>{
        console.log(res);
    }

    handleClick = () => { 
        ajax.get('api/IntegratedQuery/Application','53210119521006066x',this.backTodu);
          
      }

    render() {
        return ( 
            <div>
                zzzzzzzzzzzzzzzzzz
                <button onClick={this.handleClick}>123123</button>
            </div>
        );
    }
}

export default test;
import React,{Component} from 'react';
import Aux from '../auxillary';
import NavigationItems from '../../components/UI/Navigation/NavigationItems';

class Layout extends Component {
    render() {
        return (
            <Aux>
                  <NavigationItems />
                  <main >
                      {this.props.children}
                      </main>
                      
            </Aux>
        )
    }
}

export default Layout;
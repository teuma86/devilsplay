import propTypes from 'prop-types';
import { PureComponent  } from "react";

import DevilsHomeComponent from './DevilsHome.component';

export class DevilsHomeContainer extends PureComponent {
    static propTypes = {
        showOfLbl: propTypes.string
    };

    static defaultProps = {
        showOfLbl: 'My default label'
    }
    state = {
        clickCnt: 0
    };

    containerFunctions = {
        handleClickCount: this._handleClickCount.bind(this)
    };

    containerProps() {
        const { clickCnt } = this.state;
        const { showOfLbl } = this.props;
        return {
            clickCnt,
            showTextToComponent: showOfLbl
        }
    }
    
    _handleClickCount() {
        const { clickCnt } = this.state;
        this.setState({
            clickCnt: clickCnt + 1
        });
    }

    render() {  
        return (
            <DevilsHomeComponent
                { ...this.containerFunctions }
                { ...this.containerProps() }
            />
        );
    } 
}

export default DevilsHomeContainer;

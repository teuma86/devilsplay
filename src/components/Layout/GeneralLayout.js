import PropTypes from 'prop-types';
import { PureComponent } from "react";
import Head from 'next/head'
import Link from 'next/link'

import './GeneralLayout.module.scss'

// import Image from 'next/image'
export class GeneralLayout extends PureComponent {
    static propTypes = {
        children: PropTypes.node.isRequired,
    };

    renderHead() {
        return (
            <Head>
                <title>Devils Play</title>
                <meta name="description" content="Devils Play" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
        );
    }

    renderHeader() {
        return (
            <header>
                {/* Header comins soon */}
                { this.renderNavigation() }
            </header>
        )
    }

    renderNavigation() {
        return (
            <nav>Nowhere to go</nav>
        );
    }
    
    renderFooter() {
        return (
            <footer>
                <Link href="https://github.com/teuma86/devilsplay">Git hub source code</Link>
                
            </footer>
        )
    }
    
    render() {
        const { children } = this.props;
        return (
            <>
                {this.renderHead()}
                { this.renderHeader() }
                <main>
                    {children}
                </main>
                {this.renderFooter()}
            </>
        );
    }
}

export default GeneralLayout;
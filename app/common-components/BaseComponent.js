import React, { Component } from 'react'


class BaseComponent extends Component {

    baseState = { loading: false, validations: {} }

    async handleRequest(request) {


        this.setState({ loading: true });

        const result = await request();

        console.log(result?.errors?.response?.data?.errors);

        this.setState({ validations: result?.errors?.response?.data?.errors ?? {} });

        // if (result.errors) alert("danger", String(result.errors.message));

        this.setState({ loading: false });

        return result?.errors ? undefined : result.data;
    }


    render() {
        return (
            <div>

            </div>
        )
    }
}

export default BaseComponent

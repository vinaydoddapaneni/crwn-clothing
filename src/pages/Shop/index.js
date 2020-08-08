import React, { Component } from 'react'
import collections from './collections'
import Viewcollection from '../../components/viewcollection'

class Shop extends Component {
    constructor() {
        super()

        this.state = {
            collection: collections
        }
    }
    render() {
        const { collection } = this.state
        return (
            <div className="shop-page">
                {
                    collection.map(({ id, ...otherCollectionProps }) => (
                        <Viewcollection key={id}
                            {...otherCollectionProps}
                        />
                    ))
                }

            </div>
        )
    }
}

export default Shop

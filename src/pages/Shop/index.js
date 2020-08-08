import React, { Component } from 'react'
import collections from './collections'
import { VC, IC } from '../../components/collection'

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
                        <VC key={id}
                            {...otherCollectionProps}
                        />
                    ))
                }
                <IC />
            </div>
        )
    }
}

export default Shop

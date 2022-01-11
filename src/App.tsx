import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';

import "antd/dist/antd.css";
import { Route, Switch } from 'react-router';
import { Shop }  from 'components/material/shop';
import { ShopItem } from 'components/material/shop-item';
import Delivery from 'components/info-page/delivery';
import Warranty from 'components/info-page/warranty';
import Contacts from 'components/info-page/contact';
import { ShopSearch }  from 'components/material/shop-search';
import { Comments } from 'components/comments/comment';
import { Account } from 'components/customer/account';
import { ShopBasket } from 'components/shop-basket/shop-basket';
import { OrderHistory } from 'components/customer/order-history';
import { OrderReview } from 'components/customer/order-review';

export default function Index() {
  return (
    <BrowserRouter>
    <Switch>
      <Route exact path='/item' component={ShopItem}/>
      <Route exact path='/delivery' component={Delivery}/>
      <Route exact path='/warranty' component={Warranty}/>
      <Route exact path='/contacts' component={Contacts}/>
      <Route exact path='/comments' component={Comments}/>
      <Route exact path='/account' component={Account}/>
      <Route exact path='/shop-basket' component={ShopBasket}/>
      <Route exact path='/orders' component={OrderHistory}/>
      <Route exact path='/order' component={OrderReview}/>
      <Route exact path='/' component={Shop}/>
      <Route  path='/search/pictures' component={ShopSearch}/>
    </Switch>
  </BrowserRouter>
  );
}
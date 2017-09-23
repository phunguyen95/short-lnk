import React from "react";
import { Accounts } from "meteor/accounts-base";
import LinksList from "./LinksList";
import PrivateHeader from "./PrivateHeader";
import AddLink from "./AddLink";
import LinksListFilter from "./LinksListFilter";
export default class Link extends React.Component {
  render() {
    return (
      <div>
        <PrivateHeader title="Your Links" />
        <div className="page_content">
          <LinksListFilter />
          <AddLink />

          <LinksList />
        </div>
      </div>
    );
  }
}
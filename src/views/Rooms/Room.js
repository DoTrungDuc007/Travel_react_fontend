/*eslint-disable*/
import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Hidden from "@material-ui/core/Hidden";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";

import styles from "assets/jss/material-dashboard-react/views/iconsStyle.js";
import Table from "../../components/Table/Table";

const useStyles = makeStyles(styles);

export default function Rooms() {
    const classes = useStyles();
    return (
        <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
                <Card>
                    <CardHeader color="primary">
                        <h4 className={classes.cardTitleWhite}>Simple Table</h4>
                        <p className={classes.cardCategoryWhite}>
                            Here is a subtitle for this table
                        </p>
                    </CardHeader>
                    <CardBody>
                        <Table
                            tableHeaderColor="primary"
                            tableHead={["Name", "Country", "City", "Salary"]}
                            tableData={[
                                ["Dakota Rice", "Niger", "Oud-Turnhout", "$36,738"],
                                ["Minerva Hooper", "Curaçao", "Sinaai-Waas", "$23,789"],
                                ["Sage Rodriguez", "Netherlands", "Baileux", "$56,142"],
                                ["Philip Chaney", "Korea, South", "Overland Park", "$38,735"],
                                ["Doris Greene", "Malawi", "Feldkirchen in Kärnten", "$63,542"],
                                ["Mason Porter", "Chile", "Gloucester", "$78,615"]
                            ]}
                        />
                    </CardBody>
                </Card>
            </GridItem>
            {/*<GridItem xs={12} sm={12} md={12}>*/}
            {/*  <Card plain>*/}
            {/*    <CardHeader plain color="primary">*/}
            {/*      <h4 className={classes.cardTitleWhite}>Material Design Icons</h4>*/}
            {/*      <p className={classes.cardCategoryWhite}>*/}
            {/*        Handcrafted by our friends from{" "}*/}
            {/*        <a*/}
            {/*          href=""*/}
            {/*          target="_blank"*/}
            {/*        >*/}
            {/*          Google*/}
            {/*        </a>*/}
            {/*      </p>*/}
            {/*    </CardHeader>*/}
            {/*    <CardBody>*/}
            {/*      <Hidden only={["sm", "xs"]}>*/}
            {/*        <iframe*/}
            {/*          className={classes.iframe}*/}
            {/*          src=""*/}
            {/*          title="Icons iframe"*/}
            {/*        >*/}
            {/*          <p>Your browser does not support iframes.</p>*/}
            {/*        </iframe>*/}
            {/*      </Hidden>*/}
            {/*      <Hidden only={["lg", "md"]}>*/}
            {/*        <GridItem xs={12} sm={12} md={6}>*/}
            {/*          <h5>*/}
            {/*            The icons are visible on Desktop mode inside an iframe. Since*/}
            {/*            the iframe is not working on Mobile and Tablets please visit*/}
            {/*            the icons on their original page on Google. Check the*/}
            {/*            <a*/}
            {/*              href=""*/}
            {/*              target="_blank"*/}
            {/*            >*/}
            {/*              Material Icons*/}
            {/*            </a>*/}
            {/*          </h5>*/}
            {/*        </GridItem>*/}
            {/*      </Hidden>*/}
            {/*    </CardBody>*/}
            {/*  </Card>*/}
            {/*</GridItem>*/}
        </GridContainer>
    );
}

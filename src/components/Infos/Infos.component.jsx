import React from "react";
import { Grid } from "@material-ui/core";

import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import CardGiftcardIcon from "@material-ui/icons/CardGiftcard";
import HttpsIcon from "@material-ui/icons/Https";

import Downloads from "../../assets/images/sorry.png";

import {
  InfoContainer,
  Infodetails,
  InfoIcon,
  InfoTitle,
  InfoDesc,
  InfoDownloads,
} from "./Infos.styles.jsx";

const Infos = () => {
  return (
    <InfoContainer className="col-6 col-sm-4" data-test="InfosWrapper">
      <Infodetails container>
        <Grid item xs={3}>
          <InfoIcon>
            <LocalOfferIcon />
          </InfoIcon>
        </Grid>
        <Grid xs={9} item text-left="true">
          <InfoTitle xs={12} item>
            Trouvez le meilleur prix pour votre trajet
          </InfoTitle>
          <InfoDesc xs={12} item>
            Comparez et réservez vos billets pour voyager avec SNCF, OUIGO,
            Eurostar et plus de 200 autres transporteurs.
          </InfoDesc>
        </Grid>
      </Infodetails>
      <Infodetails container>
        <Grid item xs={3}>
          <InfoIcon>
            <CardGiftcardIcon />
          </InfoIcon>
        </Grid>
        <Grid xs={9} item text-left="true">
          <InfoTitle xs={12} item>
            Obtenez vos points de fidélité et vos réductions
          </InfoTitle>
          <InfoDesc xs={12} item>
            Nous acceptons les cartes de réduction et abonnements SNCF et bien
            d'autres encore.
          </InfoDesc>
        </Grid>
      </Infodetails>
      <Infodetails container>
        <Grid item xs={3}>
          <InfoIcon>
            <HttpsIcon />
          </InfoIcon>
        </Grid>
        <Grid xs={9} item text-left="true">
          <InfoTitle xs={12} item>
            Payez en toute sécurité
          </InfoTitle>
          <InfoDesc xs={12} item>
            Nous acceptons PayPal, Apple Pay, Visa, Amex et toutes les cartes
            bancaires internationales.
          </InfoDesc>
        </Grid>
      </Infodetails>
      <Grid xs={12} item>
        <InfoDownloads src={Downloads} alt="..." />
      </Grid>
    </InfoContainer>
  );
};

export default Infos;

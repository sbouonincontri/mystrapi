import type { Schema, Attribute } from '@strapi/strapi';

export interface ComponentsArticleList extends Schema.Component {
  collectionName: 'components_components_article_lists';
  info: {
    displayName: 'ArticleList';
    icon: 'bell';
  };
  attributes: {
    Article: Attribute.Component<'components.article', true>;
  };
}

export interface ComponentsArticle extends Schema.Component {
  collectionName: 'components_components_articles';
  info: {
    displayName: 'Article';
    icon: 'emotionHappy';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    date: Attribute.Date;
    icon: Attribute.Media;
  };
}

export interface ComponentsButton extends Schema.Component {
  collectionName: 'components_components_buttons';
  info: {
    displayName: 'Button';
    icon: 'check';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    link: Attribute.String;
    type: Attribute.Enumeration<
      ['primary', 'secondary', 'putline', 'ouline-icon']
    >;
  };
}

export interface ComponentsHeader extends Schema.Component {
  collectionName: 'components_components_headers';
  info: {
    displayName: 'Header';
    icon: 'italic';
  };
  attributes: {
    title: Attribute.String;
    subtitle: Attribute.String;
  };
}

export interface ComponentsInfoCard extends Schema.Component {
  collectionName: 'components_components_info_cards';
  info: {
    displayName: 'InfoCard';
    icon: 'apps';
  };
  attributes: {
    image: Attribute.Media;
    title: Attribute.String;
    description: Attribute.Text;
    background: Attribute.Enumeration<['blue', 'white', 'green', 'grey']>;
    CTAButton: Attribute.Component<'components.button'>;
  };
}

export interface ComponentsTitle extends Schema.Component {
  collectionName: 'components_components_titles';
  info: {
    displayName: 'title';
    icon: 'bold';
    description: '';
  };
  attributes: {
    title: Attribute.String;
  };
}

export interface ComponentsTwoButtonCta extends Schema.Component {
  collectionName: 'components_components_two_button_ctas';
  info: {
    displayName: 'TwoButtonCTA';
    icon: 'bell';
    description: '';
  };
  attributes: {
    FirstButton: Attribute.Component<'components.button', true>;
    SecondButton: Attribute.Component<'components.button', true>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'components.article-list': ComponentsArticleList;
      'components.article': ComponentsArticle;
      'components.button': ComponentsButton;
      'components.header': ComponentsHeader;
      'components.info-card': ComponentsInfoCard;
      'components.title': ComponentsTitle;
      'components.two-button-cta': ComponentsTwoButtonCta;
    }
  }
}

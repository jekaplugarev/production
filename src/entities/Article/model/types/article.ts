import { User } from 'entities/User';

export interface ArticleBlockBase {
    id: string;
    type: 'CODE' | 'IMAGE' | 'TEXT';
}

export interface ArticleCodeBlock extends ArticleBlockBase {
    type: 'CODE'
    code: string;
}

export interface ArticleImageBlock extends ArticleBlockBase {
    type: 'IMAGE';
    src: string;
    title: string;
}

export enum ArticleView {
    BIG = 'BIG',
    SMALL = 'SMALL',
}

export interface ArticleTextBlock extends ArticleBlockBase {
    type: 'TEXT';
    title?: string;
    paragraphs: string[];
}

export type ArticleBlock = ArticleCodeBlock | ArticleImageBlock | ArticleTextBlock;

export interface Article {
    id: string;
    title: string;
    user: User;
    subtitle: string;
    img: string;
    views: string;
    createdAt: string;
    type: 'IT' | 'SCIENCE' | 'ECONOMICS';
    blocks: ArticleBlock[];
}

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

export interface ArticleTextBlock extends ArticleBlockBase {
    type: 'TEXT';
    title?: string;
    paragraphs: string[];
}

export type ArticleBlock = ArticleCodeBlock | ArticleImageBlock | ArticleTextBlock;

export interface Article {
    id: string;
    title: string;
    subtitle: string;
    img: string;
    views: string;
    createdAt: string;
    type: 'IT' | 'SCIENCE' | 'ECONOMICS';
    blocks: ArticleBlock[];
}

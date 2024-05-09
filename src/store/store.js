import { create } from 'zustand';

const useArticleStore = create((set) => ({
  articles: [],
  addArticle: (article) => set((state) => ({ articles: [...state.articles, article] })),
}));

export default useArticleStore;
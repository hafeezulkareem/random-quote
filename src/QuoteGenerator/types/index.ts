export interface QuoteType {
   id: string;
   quoteText: string;
   quoteAuthor: string;
   quoteGenre: string;
}

export interface GetQuotesType {
   statusCode: number;
   message: string;
   pagination: {
      currentPage: number | null;
      nextPage: number | null;
      totalPages: number | null;
   };
   totalQuotes: number | null;
   data: Array<{
      __v: number;
      _id: string;
      quoteText: string;
      quoteAuthor: string;
      quoteGenre: string;
   }>;
}

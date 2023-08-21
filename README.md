This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

```
=IF(SUM(IF(E15<>"Р";E16;0); IF(F15<>"Р";F16;0); IF(G15<>"Р";G16;0); IF(H15<>"Р";H16;0); IF(K15<>"Р";K16;0); IF(L15<>"Р";L16;0); IF(M15<>"Р";M16;0); IF(N15<>"Р";N16;0); IF(O15<>"Р";O16;0); IF(R15<>"Р";R16;0); IF(S15<>"Р";S16;0); IF(T15<>"Р";T16;0); IF(U15<>"Р";U16;0); IF(V15<>"Р";V16;0); IF(Y15<>"Р";Y16;0); IF(Z15<>"Р";Z16;0); IF(AA15<>"Р";AA16;0); IF(AB15<>"Р";AB16;0); IF(AC15<>"Р";AC16;0); IF(AF15<>"Р";AF16;0); IF(AG15<>"Р";AG16;0); IF(AH15<>"Р";AH16;0); IF(AI15<>"Р";AI16;0))<>0;SUM(IF(E15<>"Р";E16;0); IF(F15<>"Р";F16;0); IF(G15<>"Р";G16;0); IF(H15<>"Р";H16;0); IF(K15<>"Р";K16;0); IF(L15<>"Р";L16;0); IF(M15<>"Р";M16;0); IF(N15<>"Р";N16;0); IF(O15<>"Р";O16;0); IF(R15<>"Р";R16;0); IF(S15<>"Р";S16;0); IF(T15<>"Р";T16;0); IF(U15<>"Р";U16;0); IF(V15<>"Р";V16;0); IF(Y15<>"Р";Y16;0); IF(Z15<>"Р";Z16;0); IF(AA15<>"Р";AA16;0); IF(AB15<>"Р";AB16;0); IF(AC15<>"Р";AC16;0); IF(AF15<>"Р";AF16;0); IF(AG15<>"Р";AG16;0); IF(AH15<>"Р";AH16;0); IF(AI15<>"Р";AI16;0));"")
```

```
=SUMPRODUCT((E114:AI114="В")*E115:AI115)+SUMPRODUCT((E114:AI114="Д")*E115:AI115)
```

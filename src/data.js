//USERS
const users = [{
    id: 1,
    nickname: "trolero23",
    password: "asdsasad",
    email: "example@gmail.com",
    avatar: "image.png",
    karma: 12323,
    bday: "2020-07-06",
}]

//COMMUNITIES
const communities = [{
    id: 1,
    name: "news",
    description: "blablablabla",
    createdBy: 1,
    numberOfSubs: 1213,
    img: "https://placeimg.com/640/480/arch",
    bgImage: "image.png",
},
{
    id: 2,
    name: "sports",
    description: "blablablabla",
    createdBy: 1,
    numberOfSubs: 1213,
    img: "https://placeimg.com/640/480/arch/grayscale",
    bgImage: "image.png",
},
{
    id: 3,
    name: "memes",
    description: "blablablabla",
    createdBy: 1,
    numberOfSubs: 1213,
    img: "https://placeimg.com/640/480/arch/sepia",
    bgImage: "image.png",
},
{
    id: 4,
    name: "funny",
    description: "blablablabla",
    createdBy: 1,
    numberOfSubs: 1213,
    img: "https://placeimg.com/640/480/arch/tech",
    bgImage: "image.png",
},
{
    id: 5,
    name: "science",
    description: "blablablabla",
    createdBy: 1,
    numberOfSubs: 1213,
    img: "https://placeimg.com/640/480/arch/people",
    bgImage: "image.png",
}]


//POSTS
//Puede llevar img o descripcion, solo una de las dos
const posts = [{
    id: 1,
    postedBy: 1,
    communityId: 2,
    title: "Minesweeper 99 x 99, 1500 mines. Took me about 2.5 hours to finish, nerve-wracking. No one might care, but just wanted to share this.",
    img: "https://placeimg.com/800/500/tech",
    description: "What is a scientific fact that absolutely blows your mind?",
    upvotes: 234,
    comments: 53,
    postedDate: "2022-02-13"
},
{
    id: 2,
    postedBy: 1,
    communityId: 3,
    title: "México escala 5 posiciones en recepción de inversión extranjera para ubicarse en el 9.° lugar mundial [Informe sobre las inversiones en el mundo 2021 - Conferencia de las Naciones Unidas sobre Comercio y Desarrollo]",
    img: "https://placeimg.com/600/200/nature",
    description: "What is a scientific fact that absolutely blows your mind?",
    upvotes: 634,
    comments: 12,
    postedDate: "2022-02-13"
},
{
    id: 3,
    postedBy: 1,
    communityId: 1,
    title: "Freddie Mercury is the most grossly overrated singer of all time",
    img: "https://placeimg.com/1000/1000/any",
    description: "What is a scientific fact that absolutely blows your mind?",
    upvotes: 324,
    comments: 23,
    postedDate: "2022-02-13"
},
{
    id: 4,
    postedBy: 1,
    communityId: 3,
    title: "TIL that the Japanese Yakuza engage in a unique form of extortion known as sōkaiya. Instead of forcing small businesses into protection rackets, the Yakuza harass the stockholders of larger corporations.",
    img: "https://placeimg.com/400/100/animals",
    description: "What is a scientific fact that absolutely blows your mind?",
    upvotes: 531,
    comments: 78,
    postedDate: "2022-02-13"
}]

//COMMENTS
const comments = [{
    postId: 1,
    commentedBy: 2,
    comment: "blablabla"
}]

export { users, comments, posts, communities }
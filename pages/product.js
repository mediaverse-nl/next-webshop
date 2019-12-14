import React from 'react'
import Head from 'next/head'
import { withRouter } from 'next/router'
import Layout from '../layouts/Main';
import {getProduct} from '../api/Products'
import {Link} from "../routes";

class Product extends React.Component {
    static async getInitialProps({ query }) {
        const res = await getProduct(query.id)
        const json = await res.json()

        return {
            category: json.data.category,
            product: json.data
        }
    }

    render () {
        const { router } = this.props
        // console.log( this.props.product)
        return (
            <Layout>
                <Head>
                    <title>{this.props.product.title}</title>
                    <meta name='description' itemProp='description' content={this.props.product.description}/>

                    <meta property='article:published_time' content='2015-01-31T20:30:11-02:00'/>
                    <meta property='article:section' content='news'/>

                    <meta property="og:description" content={this.props.product.description}/>
                    <meta property="og:title" content={this.props.product.title}/>
                    <meta property="og:url" content="http://current.url.com"/>
                    <meta property="og:type" content="article"/>
                    <meta property="og:locale" content="pt-br"/>
                    {/*<meta property="og:locale:alternate" content="pt-pt"/> */}
                    <meta property="og:site_name" content=""/>
                    <meta property="og:image" content="http://image.url.com/cover.jpg"/>
                    <meta property="og:image" content="http://image.url.com/img1.jpg"/>
                    <meta property="og:image" content="http://image.url.com/img2.jpg"/>
                    <meta property="og:image" content="http://image.url.com/img3.jpg"/>
                    <meta property="og:image:url" content="http://image.url.com/cover.jpg"/>
                    <meta property="og:image:size" content="300"/>

                    <meta name="twitter:card" content="summary"/>
                    <meta name="twitter:title" content="Title"/>
                    <meta name="twitter:site" content="@LuizVinicius73"/>

                    <meta name="robots" content="index, follow" />
                </Head>

                <hr/>
                {/*<div className="block-center">*/}
                {/*    <div className="row">*/}
                {/*        /!*<div className="col-3"> </div>*!/*/}
                {/*        /!*<div className="col-3"> <pre> {JSON.stringify(this.props.product, null, 2)}</pre></div>*!/*/}
                {/*    </div>*/}
                {/*</div>*/}

                <div className="container">
                    <style xjs>{`
                        .breadcrumb{
                            margin-top:35px;
                            background: #e9ecef;
                        }
                    `}</style>
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><Link route='home'><a>Home</a></Link></li>
                            <li className="breadcrumb-item"><Link route='categories'><a>Categories</a></Link></li>
                            <li className="breadcrumb-item"><Link route='category' params={{id: this.props.category.id}}><a>{this.props.category.value}</a></Link></li>
                            <li className="breadcrumb-item active" aria-current="page"><a>{this.props.product.title}</a></li>
                        </ol>
                    </nav>
                    <div className="row" >
                        <div className="col-6">
                            <img className="img-fluid w-100 img-thumbnail" alt="Card image cap" src="data:image/webp;base64,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" />
                            <hr/>
                            <div className="row">
                                <div className="col-2">
                                    <img className="img-fluid w-100 img-thumbnail" alt="Card image cap" src="data:image/webp;base64,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" />
                                </div>
                                <div className="col-2">
                                    <img className="img-fluid w-100 img-thumbnail" alt="Card image cap" src="data:image/webp;base64,UklGRmoQAABXRUJQVlA4IF4QAAAQZgCdASoOAQ4BPj0ci0SiIaERaKVYIAPEtLdwt4cAB1N/euS/5g4E5q5wH5q/2m+f8w/7HeuB6Qt439BTy4PZwsX2JbtS7PHaz+88ahCw8X4RfyP7cedjyQ9AD9If772mP+DzD/te+nIWJG1C03pb5P07YbxRbNbAJsd0/XT+PVGW+OzwOfA6J4s1XzqCQXyZXqadX5EONyxg07+/YNfydpR0O6hIZEry6hi/kzQrMfA6LE1sMwT652xPpn/sbSY/bz1b0nBiBgPo+hKVJivZLpROJWQfz4CXjWDhQJ5mTpDopdGig8Yegm8twFoCNtPEogrpR7YNwy5I2qGdaoZnIUII6ofEjbLxwmJQI+Ja7PvQY0DxHNFfQpXRnU901FhFMc/0yilOwcIKOMAJfzDl21YzTvjCO5PjTvvHQIfVBz3SKQvYl2xLKC/h7p7UOjGExv/6xZbSD3gRHN8TdvjDZIl2W+Il4Tlp3PRit9LSDpgkZL2k73Hxku0f9u29RF+rReiSAH/sVlBEfpfM0aD/HWVZz1sDL9qAYku8rF85fZ0XOUuFubq6peXZ0PTU5kMRIspJ2WCziYVJc/M2U2vEQlEEJLkNtDRw9U3iYd0GKWbQELHmp4gyMy8Ekx+Nr0CQGY75rjqL8DDUf+fEe5jW2ODV3ihiXUk1hgrcV961BtKvlh/DuqOPbfSlXXetWfHs+xQpos4KmU0TuBkpZNpks/0mEO4aErTLST1m4xqIkvxBQpn6RwWL4yn4UKo1/5wFsA2tlRGjmzUElOmiZwRgTVfH9GDyEKJRFQVVCrZSSsuWPssRaSk9hsjtDGxUKGZH8ahPYiZCt8Mo+LWIa87tBhUoeLf4C8AYGL8pL9vXaZo/DN9PE1LvhsdMpHdEn8Tu2L8KEowqtjdE5raaUQEmXJe7LzYQqaTPgEhAf++pzYV4iuUw0gpwV2Z63cMToWJbrnMsmHg5Dy1JjHkpPEDGwm0diueO717Vd3j2DX4TtmxNtP92Ri7V21iocNOUejwClR7gWtXAf5xclZ/uI3+CA2SlmbV95PzA72TP8Rah6/LqjLoXmq/cphHR+vkTBmf/rlottfRqIgAA/vr0gXLowuNydcFebERXnagXlEaM3Qh+CeTuV18gEHrVy363RLQafimoQBSNy8SIvjbtJ8ZT4RK/BmBBVhnkg9lJcFnAL1XN5daRMdu/uEAYRfnn8ZS4AOghIk6LJZWuK5MjO6V66QvWnP7g5bz7dXF0HmeYMkDTy7nRFpMJWeQvgCo4Q+GX5KeKEZwkt29IvI1mxYQyKqnjGssp+zxlkfPNm/MhyGSd9bRsOpnQ+Yo7TdLsc1eOcsMpzSa7nUNegrsenbe8niyq48GQfCcGs95lKcVjycVe1tkzsIzTvFuLhMoFAnQBaZ7uRzU8OFG1vCnEcKl/ieR7e+Fu0IP5xUISSJ9LBbGBOgjp8RTi2fHqwyyePcB3v5gLhwJPa0jkAPAKvIzAxCoZwa4aG78038uY40FpmoWi5RkFU6ernQj5/y8J1oqq/7XLvMPpMjzzSsUCMi2W4Ex6ebE1e47OVWNZZhPbAiEvDu6E03DWUCxSGgAbOxuFQDwnUKkENRY09jfkoJKVA3oYbq++QO0pqXCK0MxDgmLY5sZw+u1MNV536FpIOk6uXRjOZRaohcgICq+rG/SUHMb7en04u+gMdwcyK/DQsOjzqls634fgQ81BsWu6o3xGOOzEBG053hL/1+TnsefYV/J6hXyMUuj1jXYADEi5RyAn5Xg/ssEq+4u5n8BJayAZjPuRJb0b9XPNMn1JwbW/PUvpPD391KgWch8K11fiOvHYPnZHI2DYTgiiLXnE+BVYPhLbZT47fO0hiRiZOtx+ozQBEiYo+sezeHoMO41bZzPZUl/jNN+E7iUM6ILol9ffFVW1DJ/BWkwvOZqcFLkfNLoWQfE/8Yadb7Goe/C3J6kX9HaAViueov5c/v2eVbpVgK3fxHXiWbESfnQRztEXA5BU26JbXTPEKIy56SHnY0Dyd9UipNvslcyPEP0obI3KwX75lESd+jbr44XL7f4qLkMHr3SDErgp9HlN7jpRqzyVDzC8kKg0Tltxj9O5jN9GVQsf7DE3Ab5BgnwJnAEqOfH2s4zYBgvShN3YHnXzduocHuOfHSXHj0A2V//FIaddfstdJg1g7Gz9pZaplJX8Gv2vnBGZ22NvtOarlN2DFWhVzox+iRi+DYb861ZvwYTGT7DrYhy33/6yGJK58qooj+blQ/0nNHYceEeFQBujHX1XubqNLzBy0u//56STf/CWK3/OFg/m4ESgV/k/LbXxA5pDq61y3ehKVf8Afuru7PKNVobR5eCT/dKj13/zBTS76jgeUfVhL/+vW0Dc8q+pYAyESEPINQtpDIEAykIYhez+eL+prbilR2T6wLzMBZWO0QQtOxRZYLS2m8TUP1nDZkYeifwfReLW2ixUZSmONK+WVzE5qUD2yLe8KUX80aWeT55Let1j2ln2X9mVI9LUkkf/nFPwWj2n/7/+wGYr/1wpYB+TU8ItVTSXv+lYV4pANkk/dRsM/jF0Nj4tGbFZg8EmnQ7PeLb56n+yp4vUPnoBxFN5Vg9wFAUgTuxnhI6zOCQX7UvJs8Vea+OzPQ4G5niphAu+tJQpMR8xF7xf8yho2omV0h7V+S4ISft2//jF9nL/9naQtwwfmOGGQsieWopv4QUPedVt1/5HN3YyUvcu2LOyDMNTK/Yx1PhaH6gW+Ze++claSQNxNkOnC7gcZz1uz0Qi/VgjoNUXmS+Ip/Vdr5R2pn9vTdrnI8vEw30p4yvVrOfMU8Yo9RpLQDRtudAl6Dtoqlo0bARcPNeNNDS4JHDZ9T+bpq97EKuoHH1wnXDtHjnfTZtxLXqtwas9p/KR7MwJhy+jC7xYiE64BfsgTf4ZTqXPgpvOoRhMoUspv3FevseDBFDOKUzdJOj0Mx6Gx0fHeE++yyTzHiLmpAdeW4Ejs+ok3a1+Avqde8BEz0zpfYhNUwLvtpx0pAGGC+4e9L7q3eT2BesMA3OA/yijzAD9Uou3YBOR9MOC4f9Att5si4YvNIrdQ6nySDN2CQo7xmFhWgUI7HpCdJtfn+9Xx34i7niOHWhFnFshcIq/Tk0TVUiWTcNAH/EvmO/nIWI6T7quov4hUGzeRJMG6FKCYGMn40OId1dfUozpGRpCX7P6csKluQsY3tO851139lPEStInpIVCN6HQBroGUJiMJfF5EE+hsqM3wxf1BEzlrcXB4cXAW6NElGuzAt35SDykXgyYE9i+XYFcuPKH+vfyffiv25j10T49MHMYHp29EQ8YC22oOJ4xwvEu92PBCF4fmEOh2yZ5O0VNjQVjEtuVNa4x3LcGZ7PMwsy2F5gKw2SYG5nzRbL3H5ltVv/FkWEfKX3cxFXrHGcn8Dc/rOhxfoeWv/YIcbrEeGDmHupna2+XKo4bWLWYZEXiUdks87TgNplU99Y4jKeFc1KkAi5uFLFpsFoYQKq4V9310OQPT/21mmAtj/Awf+1PzfNFqUoQZg+aqxlmhBKhnrrPnpOS2KY+CX5zwjwkqI3/YWf/Blv04xxN9vlDkSi9uLO+0OZdRnMETaN7auVFrZctPBCO0+PJR0Fx+M7H7kjDqIEwO+waL74bKVHGfak+1K2/WuAjYQUgX0+S7Iicikh82aJxfTsQWV7zu7BnIvUAEaQKHkFjG1mbAo588msACiodp8DR8jLx4RAcizIs49DhSrZY+kPYWaJwKe1/QQOXp82LTXvKet4hBRya02OG/XRxzxdz+VXT2/FBMAndSE8hMYVkjOuHU06zQz+4R6Ny9MTyxtadlnTx8FVD34b7ncjeiY1mgZh5MtngHpOydDz4AR3oQ7q8MyGW8tZnSsUFz84y8uMMDNu75/XyUJJVzRlE8KuX4j5gpS0wW65k7fK9FAa9AtxWba8roeS2QG4bK0Q8IwUo9kQ1Htd6Oa3qnXuPAnHLAdW+/X8eXxiK1Sj17r6yZWFD9/XvRSR9/gPdaGw1QeCVL0njjGZzS7bYcQu4mw4ykjHo/u+gTx51krIf96c15x3F0rNXF40x52jJYu+iYUUGbmHVPOa4PWeqP170QmyiyRxYcjkjzpcg5yCoOp3DUwxz6VsexBexs+j36ezH0oynb8fHFLWG+kN3mED/xRMcAmwSjsG/8e7x+B1by34g8AgCFtzv4L9vVqqTzeDowasVUel0wAoUDTubceBpypjpnzbVr2MTJOigjpUSKYQkz6OB767TLLvM9aPixXZuBMhe3egni5hji3oqqnYvt/7qlb8vYxVMi23h+dXoI1648DErY1hY0l7CxVtIIMWvRTdzQMk+SLURqjrOntDNeyjgGoyV9UMWl2rynebpwDEA9SfhW2ECLikgxZLVQORs2QYNCeeBvHyOdAsNxD4hfI1EnJ+6N1wa7ISMcXE+y9J3Xc7rRxRlO2LsIENoZxu1ZKlcR5jsTXleOqlpcRla/J4+pLbti72i3yS30kVz4GhdPGpmFvrNegfj+hd5JY3weie95LLoroyWb+Uga4FDq+3AAlf9dnNOMJct8Kmn1/0h3ivhICR/Cl4GbxO9P+H2RdFeleLOeKBPbldCCykk6jSvivu0KaeQ95ZNJYZu9OvKzUFR8TnqI+VLA0nHL7fW8c/IyDx8B42T19usgR+ChU3R66sFEvsXDdfDVz0u6fOiprPLtu/CvMnQvVMcGrcy+ZDI1I4UgAZEKdFpVmvSIlQ/uiepHyNq96CSgfx6F2U9u0weahG11bwNBPSAFb6IBXlR2KZ/XPjweuvgiWTU2JmpJRieaYvXOxGpinj6Pw2/LgoKYl/tZgzcvmiTPJk38mt22kw4hPI5etgJAiJSs54fd3m+J6EgAlfMRv5vEb+f61jCF77dAWJ4kldJrGYysR2+zqzuJSRF7OSycBVDpXkaa+Lg82peeUnnN/64est7oSiYakryCAL3czG+aCEv+FMLQCAfu019tQ5rN1p9FDds4zBNx1d4jrm2Mb828L2sGpF3yJcBuSuXagcC1+SSbcSZ33ovx1GB70HP97cIV+/XZP/gx5tmMUdGSqO0et73DHGsnXbRPCQDac6pINNMXUNDXaHMhyvDsru8rfbSNGfN+O1da+tUhOAqUWoaIqeRJVAWLAIpnVHKBy5CORmbCr5T7zVCDb+Jy24eT0MXQOMcEo5oGMqfn2gHLUi6BcyeUedoAqKz3Hj+H4zOI1iHmwCzKhxRKkMuIEKIiih/XGlKiSad8RnCqSM/HKylJjrITn8YtrcLsmtWz4AIFp2CPZI9RdiI8roIJizHtqhs1Mbb7O8T1gJ3sF6BQ3e+G0QoHIsC3J7Tz0EDh24JFa4LXe7Lrssi1dnGAS3I3bN0Fbjwj1/WRou64qZMXTCcBnH/Oh3//8kqGQlaCINvxVCt4zyl3NlZlesN918+tA7EMgZnVtWtwTrz0hXvUmFnzyHAOxf7io8bdjVirETUmMD7mxo7FncR66fjPKp/WwmwGRR3T+yK7BEYaNeb5WPmzoC91N/LP2+3nlhBfOMKbEJUFKG75/9gl05AAAAAAA==" />
                                </div>
                                <div className="col-2">
                                    <img className="img-fluid w-100 img-thumbnail" alt="Card image cap" src="data:image/webp;base64,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" />
                                </div>
                            </div>

                        </div>
                        <div className="col-6">
                            <h1><b>{this.props.product.title}</b></h1>
                            <p>{this.props.product.description}</p>
                            <h2>Price: &euro;{this.props.product.default_price.toFixed(2)}</h2>
                            <span>stock: <b>0</b></span>
                            <hr/>

                            <button className='btn btn-success btn-block'>Winkelwagen</button>

                            <hr/>
                        </div>
                    </div>

                    <hr/>
                    <h3>Reviews</h3>
                    <div className="row">

                        {this.props.product.reviews.map((item, i) =>
                            <div key={i} className="col-6" >
                                <div className="card">
                                    <div className="card-body">
                                        <div className="row blockquote review-item">
                                            <div className="col-md-3 text-center">
                                                <img className="rounded-circle reviewer" src="http://standaloneinstaller.com/upload/avatar.png" />
                                                <div className="caption">
                                                    <small>by <a> {item.naam}</a></small>
                                                </div>
                                                {item.rating} / 5
                                            </div>
                                            <div className="col-md-9">
                                                <h4>My awesome review</h4>
                                                {/*<div className="ratebox text-center" data-id="0" data-rating="5"></div>*/}
                                                <small className="review-text ">{item.text}</small> <br/>
                                                <small className="review-date text-muted"> {item.created_at}</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <br/>
                            </div>
                        )}
                    </div>
                    <hr/>

                    <h3>Properties</h3>
                    <div className="row">
                        {this.props.product.product_variants.map((item, i) =>
                            <div key={i} className="col-4" >
                                <div className="card mb-3 p-3">
                                    <div className="card-block">
                                        {/*{JSON.stringify(item, null, 2)}*/}
                                        {/*<br/>*/}
                                        price: {item.price} <br/>
                                        stock: {item.stock} <br/>
                                        <br/>
                                        {Object.keys(item.properties).map((property, j) =>
                                            <span  key={j} className="badge badge-primary">
                                                <style jsx>{`
                                                    margin-right: 5px;
                                                `}</style>
                                                {item.properties[property].id} - {item.properties[property].value}
                                            </span>
                                        )}
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    <hr/>
                </div>
            </Layout>
        )
    }
}

export default withRouter(Product)
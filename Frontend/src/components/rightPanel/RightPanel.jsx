import React from 'react';
import './RightPanel.css';
const RightColumn = () => {
  return (
    <div className="right-column">
      <div className="friend-requests">
        <h3>Friend Requests</h3>
        <div className="request">
          <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQAywMBIgACEQEDEQH/xAAbAAACAgMBAAAAAAAAAAAAAAAEBQMGAAECB//EADkQAAEDAwIFAgMHAgUFAAAAAAEAAgMEESEFEhMiMUFRBmEUcYEHIzJCUpGhM2IVgsHR8BYkJUOx/8QAGQEAAwEBAQAAAAAAAAAAAAAAAQIDAAQF/8QAIBEAAgICAwADAQAAAAAAAAAAAAECESExAxJBEyJRQv/aAAwDAQACEQMRAD8AqerV0gqW08YsL5KYUrXCIE5IF0vr4w+rDgM3TmJo4Ax2XkS0jsWwAV73VG1pOEbHqLnuERJug4accYnHVcwsIrbe6YFDprbprQzmMAWwlrMIyJ2xoNrrQwFjr4v7vJIwk9XOXyey6dPKWYZYKAtc4XIVZNsVI0XbhnsEDVkl7QOt0wDOS6CleyCpikkNmtdcnwlSyaWi3aTDJ8O0OBBsmJhcBe6S0ev0scPLI15/tK41D1dSUUO+bJ6ANySfZdKmtA+O1bGtQ14HVJqmQsdznKqWq+tdQqnWpyKaP+0XcfqUDFrOo1MjYjUuMj8Dc0f7LPJO14ek0VXgC63WVO5pCo82u1+j1Aiqo4pHN/EAO3zVh0vW6HWabiQXZI3D4n4c1LWB4zvB0cklM9Nm2BAOa25XbC1jcXSLZR6LHLJHJH2tbKUxNHHdt/DfCCFdGTwySEfRuYTdUbTZGmdztG3ISOpoxxd7P2T6qLbeyAc3mvcKc1Y8dAhpQ6K/eyAcwMJbdMamqZC0h5AFkqLuK/c04UpVQxLC4RvuQivi4/IQMjg1pueiDdISSQ4W+aRDZF9RAf8AEWxgXsnPwpbD9Ee+kj+IDto3eUXJTgsA6LNWBFTh/ruFlkMJNWXAd1aKXTIuKS4dVNPp8LLFjQE3R0axPHGS8AhNI6QENwozFseCPKYRu5AnggSMZAzZc2+SEqI2NOEUbZsoJIy4+yeQECSgWsEl1cXaQE+nZZJdTYS4DylSyF6I6ejihoH1NRiONu52eypEtY+tqnyG4v0b+keE+9aarwqKHTongXs+b5dh/qqT8U5zwyO7Wk9e9lWEPSfJPFIdsAvZp3H2RmjP4erQWHNuwR2QVFIzhtYzqR56+6lgcYquOQAnab3HdORWwvWpnVFZUSXP4zbKUUepTafXx1Eb8tPMB+dvcf8AO63X1nDcWu/Nm/ulEku5w+fXwjWDXTPbYSJIGSsN2OaHA+xWnPsALpT6DrxW+nhG83lpnGJ1/HUH9j/CZ1EZJUGsnUnasHdTGSYuachM4BJC0E3UenQ3qG37p3U0rTBcJ1H0RsBuZm7dy2aZwHVRNYYxcHojAXPiuMlBqzIrOr07y4AkkLmliLYwmtRA6S+/r2XEVI9rRdRlEdMr+umRkDizBS6KGfhtzfHlWrUdPZPHZ1wg20NgBfolqjMaMG+cFMjHdgSyhO6UEpyC3Z17J0jWBb3sdduPZEQ3ly9QSW3oulHKmiJYNPFnAXLQQMIuVqHxdFrIWzloJOVJsuFoLsFYSwaSK6Q64RDZ/ZuVY34F1RPXNcGROgY4BzxY/VD0p/JRdUqZNUrZZ7kRl2D5QVtvKPqfCMc3dHZknK3G1guT9UPwnkgNbbwCuhMhVhFC9263U9Srpo+kSVLRKWXuOpVf9Pac11Sz4ncxgN3EjBPhen04iipgGlobbqPCjOfiLcXDeWeR+q6Y0deYng3FrW7pTFYi2c4KtH2gtifXsdFIx5IzZ17KrQjmt5/hWg7iR5I1Jl3+zatMdfJTONhMzp5Lf+Fejui3ZXjfp6pNFq9NK/DQ/mPt3XtlPtfGCCCpS2UT+pHTs4cgd4TSSYGI38IPYscXEWWToANJUsawgqKLU2tjt4UdXRvJ3IM0xCRtlFFDSKoFS9th3TXgDhXSbTI7OHsVYrAQfRNBWsgeBHUDJCFLc9EXP+IqBSaGtEFLyG6L4jihgDH1ClY4IoU7NyjqZwazKB3rvjYsmTAS1EwHRQtddQvBJuV23CLYScFdhDB9ipWPCKJ4N1GIvJPZeOeqqk1FZLITdodtblepeotRjoNPlle4BxZZg914/VQvrHgG7Y29/J9kVVjt/UVF0jHB7CWkjqFe/TWmQanp8Mz7GRzeY+/dU3UQ2MBuL+3ZWX7OtTdTyyUs/wDQcbsd+l3j6p+RdoWbhpTplqpfTPwknEjqZ2sOeGX3af4TOTT3upo4musXX6rqpreCWvex2wdH2u362WzrMFYWxxMy0flzb9ly72d642lhFM9SaDXuYHTPY8Ny20Ybj6KlPjc2Ux/mHSwXpPrX1DDRUhiDmuqnt5GePcrzSme9zzc3739108V9bOHmUVKkTxzOe1p2t3tPcFev+kNT+P0uNxcC4DaV5BTtAsB2yrz9nlTwqqalvyvs9o8eUJk1o9HaV2wXkC4Fl3T3MoCCQth0sA4QwlslOPCsLot0AACAkgPhUlGykZC2njDHpq4jgfRLpxw5Qpn1A4NkiwZ5AZxkofapJH5K43KTCqJQGysx1UXBdHe/ddx/dEnsi7slailYzVC0nK6AuiJafbmyiHVGibNWWyw2XQIHdd7hbqmoRsgLCMpNqesCmGxj2h+Sf7QE/NiFX9b0Fta15icGPd3PQ47pWhotWJ+FW+oSWU7H1BA/N0b8/CCrfR+uRH7xkYYevDF7L1v0/Q09BpsFNTMADGgEgW3G2SUdPTNIuQmUGWweGH0LUv8AvS10vkFyY6f6aqaOR0fwxDWnr2IsvXmUTRiwC6fQM/FbmRcJSWzLqmefwVBpW8Gric9lunhLtV1N5jdDpNJIwnBft6fJeky6NDKbvaP2UDdBp43Fwb/CT4ZWW+XFHjH/AE5qFcHmWPmJ6yG5Puh5/SdVTWawt3vaQGgd/K9qnpoKZuwN4khvaONty7/b6qCk0O85nqA3iuthvRg7NHn3PdPUlgi4xeTxGXQNTpY3E073HttF029DP/8APsa/lcY3Db4K9zg0+LYbtH1Co/rTQqTRayn1+kHDc14jnYBgh2AfndZp1kTqvBu19gAiqHmqGoGBwmja8WsQmWmN/wC4C0Xkk0WBo5Qh5o8otowFDNgroZkINVG0E90tdMSE11dhIOEnLfC55bGZwXrW5dOYbKI3ulZgs7ittlMWVOW+FE6Hd2R6lb/Q6KRk8drhQz0lstCGZG+Fwc29vCZU04m5XYKarEYpkjLeq5abmxKaVtKS27Uu4ZY7KDtC0dbbC4Kie6wN0SPwqCWPd0KDYKyO9FnD42gpzO3dCbeEg0UbYx5ByrEOaL6KkcoscU5EjGdjtyiCwWQlE0tkc3wbJgBhVjoWRBt9lm3cMhTWWdcpqBYO6Hr0Id7Id7mxNk3HmCY42kJbWxF0kZ/uFx5CSSGiFRD7oEjqqn9o0Zn9NVrG/iIba3ncFcGi0dlX/UrGvo5GuALcYPzSS0D0r+nAxUcMbjlrGg/sm+lvHHSeO9kw0p33xU47JPZbIyLBQ1J2m63C64C5qyLFdBhPqcge0hKHWCPrb2d4ulbtxz2XPPYTouFlEbXWOsAoi7KUI2YbrW/a7qoI5D3W8uKpYwYBdt1GQ5ry5uLLlr3DquzJjojRkTw1Il5D191zU024XH8IIsex3Eai4KkkbXFDewtA/CcBa5XBjKYuaHNuELLG9vsEKBR1pkuyZzPqrLSvuzKp8T9lS130Ks+nS7mALRdMfwJILJ2kYDsFHDphA1J5dw6jIXcNTvjab9QrRYGgpYFE19/CwvDRk5TWLRNfCGnsZY7jytumDRkgBCmoa+oawHtdBvAUnsO6NVc9TSbaV3u4BWAuwqp6qkJjaxvd6nLRtJimN1wmOlf1ilEQdbqmukNPFJKnHZN2WiE4CyZtwVqLoF083XQKINT5WuCUNmGwhOtZYdhsqy5202KhNZDZK+RRGTK2942ZCCdJzFTsYcskF7FENcAlG4nN8hFxT3AyqoIwUjNrhbuEKyQFdvaSAWmxTADGlgbZyjmiaOdqhh5zZzsqSqJbFZpHRBhRuCr5tpKOMYlZcWKrcTX8S7j+ya0Ndwztf0QTGaNVNIWjc0ZR+lT46ohropo+yU7/AIaseGnkJ/ZaWMjQzgtJAkj+fVDQUskeN2L9FHT1bQ0XKmdXMHQoqSGprBOY32wQsLHBoDTnyUN8cCtOrGht3PAHzR7ApnU0VQ5jhxYwD5bdBU0ckNQeJLxCW4sLWRse+ZtwCAehdhbZSbZOIXEm1rWSvORk6VMmL+RVzVIHVdQ0NcGhucp9O4RsKr01bGys+8IyEJMCjYvngfTP2yjvgjoUbpbhxMKLVS2QNcH3AyCOizS2uFneShHZOS64LNG+4C6dIENEDsutOIblxV7wSBtUs6NxVRqHDcQOqtNa8OjdZVcwtEry/wDlSmrMDOkuNo6oQuNypahzIr7ShONfwosyGAmstictyO6FjkHlTBwLbdVUaxhTVDnI5kjyUqoZm7uG7CaQvF8JkY3IHteHtRbNsrQd1z3XcZjIsUPOzhPDm/hKOjHboAfwqI05R8DA5gIN7rqSG7StQUwKmqDC/Y511oOY58zHkkg3v/qh6mmka+7bWQk7JXSAxE8TpnupStopGkwqp1cUse17XbvYJefUL3GzWPPyag5hUm/FpZd18AkZUTWy9RTSA9MAKf2LodUtbX1Z5NsTP1POR9An1CYKUbnvM0v63H/4OyprKiaL/wBUrf8AIV0dRkb1Lx/lKybRmX06owfmWv8AFGfqC8/OpOv+c39ipY6qokIDWllz1KfsxeqLtUV4kFr3CrOoQ8aoL3NBaOhK7p6V7+eeeTb4bgIp7o3N2NIA6fRGm9k5yrCEOi1dVNUSxlm6AuOweB5VpoS2MNDkJFEyCMMia1o8BRvl2HdutZMl1Jyl2ZZmTMDQLpbW1QElr2Cr8mtua+wN7Lfx3xZ8FFzFG0lUzYbuBSSrkbK+zMIStqnRO2k4QYr2vfs6FTbAySsEUTNxdclKDM65sMImohLn7wd1h0QZqADYsN/ks1kCk0MGOKIicbhYsTBOKlxjlY5psU5pJHFjST2WLEVsIzicbIoczRfwtrFQANHM+OoLWnCOjlceqxYsg+G5jy9B0QEETX18d79b4WLEH4GOxhUUsRfkHK4ZEwWAHdYsRo6Fo7EbfF1w6lgfl0Tb/JYsQaCCy0NPzWZb5KJtLGC211pYskAkqhw6V5b1F0na9285WLEktkpbCC91xlLNTkeGGzisWIMQV0zjvybomJ7mVI2nqsWJUA16i5afeOtlWoaiR1yTlaWJhWT0lXMHlu/CNuXZPUrFiBj/2Q==" alt="Friend Request" />
          <div className="request-info">
            <p>Julia Mauro</p>
            <div className='req'>
            <p>Send you a friend request</p>
            <div className="request-actions">
              <button className="accept">Accept</button>
              <button className="decline">Decline</button>
              </div>
            </div>
          </div>
        </div>
        <div className="request2">
          <img src="data:image/jpeg;base64,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" alt="Friend Request" />
          <div className="request-info">
            <p>Ariana Louis</p>
            <div className="req">
            <p>Send you a friend request</p>
            <div className="request-actions">
              <button className="accept">Accept</button>
              <button className="decline">Decline</button>
              </div>
            </div>
          </div>
        </div>

      </div>
      
      <div className="friend-suggestions">
        <h3>Friend Suggestions</h3>
        <div className="suggestion">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvOqdqKZnnAfJEufh9jtsr5V8h7LE89VCCiQ&s" alt="Friend Suggestion" />
          <div className="suggestion-info">
            <p>Thomas Lean</p>
            <button className="add-friend">Add Friend</button>
          </div>
        </div>
        <div className="suggestion">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvOqdqKZnnAfJEufh9jtsr5V8h7LE89VCCiQ&s" alt="Friend Suggestion" />
          <div className="suggestion-info">
            <p>Thomas Lean</p>
            <button className="add-friend">Add Friend</button>
          </div>
          </div>
          <div className="suggestion">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvOqdqKZnnAfJEufh9jtsr5V8h7LE89VCCiQ&s" alt="Friend Suggestion" />
          <div className="suggestion-info">
            <p>Thomas Lean</p>
            <button className="add-friend">Add Friend</button>
          </div>
          </div>
          </div>
          
        <div className='help'>
        
        <a href="https://login-about.com">About</a>
        <a href="https://login-help.com">Helpcentre</a>
        <a href="https://login-advertising.com">Adverstising           </a>
        <a href="https://login-accessibility.com">Accessibility</a>
        <a href="https://login-business.com">Business-services    </a>
        <a href="https://login-privacyandterms">Privacy and Terms</a>
      </div>
    </div>
    
  );
}

export default RightColumn;
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<%@ page session="false" %>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<html>
<head>
	<title>Home</title>
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap.min.css">
	<!-- 부가적인 테마 -->
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap-theme.min.css">
	
	<script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
 
	
</head>
<body>
<h1>
	WRITE ME
</h1>

<P>  The time on the server is ${serverTime}. </P>

<p><a href="/board/list">게시물 목록</a></p>
<p><a href="/member/register">회원가입</a></p>

<script type="text/javascript">
	$(document).ready(function(){
		$("#logoutBtn").on("click", function(){
			location.href="member/logout";
		})
		
	})
	
	$(document).ready(function(){
		$("#register").on("click", function(){
			location.href="member/register";
		})
		
	})
</script>
<body>
	<form name='homeForm' method="post" action="/member/login">
		<c:if test="${member == null}">
			<div>
				<label for="userID"></label>
				<input type="text" id="userID" name="userID">
			</div>
			<div>
				<label for="userPW"></label>
				<input type="password" id="userPW" name="userPW">
			</div>
			<div>
				<button type="submit">로그인</button>
				<button id = "register" type="button">회원가입</button>
			</div>
		</c:if>
		<c:if test="${member != null }">
			<div>
				<p>${member.userID}님 환영 합니다.</p>
				<button id="logoutBtn" type="button">로그아웃</button>
			</div>
		</c:if>
		<c:if test="${msg == false}">
			<p style="color: red;">로그인 실패! 아이디와 비밀번호를 확인해주세요.</p>
		</c:if>
	</form>
</body>




</body>
</html>

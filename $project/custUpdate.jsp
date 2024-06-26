<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<c:set var="path" value="${pageContext.request.contextPath}"></c:set>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>고객 정보 획인 및 수정</title>
<script src="https://code.jquery.com/jquery-3.7.1.min.js" 
	integrity="sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo=" 
	crossorigin="anonymous"></script>
	<script src="${path}/resources/js/form.js"></script>
</head>
<body>
	<form action="<c:url value='/custForm' />" method="post">
		<input type="hidden" name="cust_sn" value="${consultDto.cust_sn}" />
		<table>
			<tr>
				<td>**작성일자:</td>
				<td><input type="text" name="last_mdfcn_dt"
					value="${currentDate}" readonly /></td>
			</tr>
			<tr>
				<td>*고객명:</td>
				<td><input type="text" name="cust_nm"
					value="${consultDto.cust_nm}" /></td>
			</tr>
			<tr>
				<td>**주민번호:</td>
				<td><input type="text" name="pridtf_no"
					value="${consultDto.pridtf_no}" readonly /></td>
			</tr>
			<tr>
				<td>*이메일:</td>
				<td><input type="text" name="eml_addr"
					value="${consultDto.eml_addr}" /></td>
			</tr>
			<tr>
				<td>전화번호:</td>
				<td><input type="text" name="home_telno"
					value="${consultDto.home_telno}"  /></td>
			</tr>
			<tr>
				<td>*휴대폰번호:</td>
				<td><input type="text" name="mbl_telno"
					value="${consultDto.mbl_telno}"  /></td>
			</tr>
			<tr>
				<td>*직업:</td>
				<td><input type="text" name="cr_nm" value="${consultDto.cr_nm}" /></td>
			</tr>
			<tr>
				<td>주소:</td>
				<td><input type="text" name="road_nm_addr" value="${consultDto.road_nm_addr}"  /></td>
			</tr>
		</table>
		<button type="submit">등록</button>
		<button type="submit">변경</button>
		<button type="button" id="view">고객 조회</button>
	</form>
	
	 <form action="<c:url value='/new' />" method="post">
		<button type="submit">신규</button>
	</form>
	
	<form action="<c:url value='/delete' />" method="post">
		<input type="hidden" name="cust_sn" value="${consultDto.cust_sn}" />
		<button type="submit">삭제</button>
	</form>
</body>
</html>

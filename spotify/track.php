<?php
header('Access-Control-Allow-Origin: *');
function refreshToken()
{
    $url = "https://accounts.spotify.com/api/token";
    $curl = curl_init($url);
    curl_setopt($curl, CURLOPT_URL, $url);
    curl_setopt($curl, CURLOPT_POST, true);
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
    $headers = array(
        "Content-Type: application/x-www-form-urlencoded",
        "Authorization: Basic ZDcxNzk2N2I2YzA5NDBmYzk5YjdkNDZmODk2MzNjYjE6NmNiMjAxNmUyMWYxNDA0MWE3NTMwMWFhODAzOWQxYjE=",
    );
    curl_setopt($curl, CURLOPT_HTTPHEADER, $headers);
    $data = "refresh_token=AQBWATtp8rY-b_nE3DCRrTAVGPED1ULfFuN3VqpKTlq-Y4HnXmv94a1sH1AUyiTz-h69QOALm39K_bwrStqlPlJp6PaEG8wi6UNQ-SbKDe_rVE1Ikyg4aBlDJVvCZy5adEM&grant_type=refresh_token";
    curl_setopt($curl, CURLOPT_POSTFIELDS, $data);
    $resp = curl_exec($curl);
    curl_close($curl);
    $respObj = json_decode($resp);
    return $respObj->access_token;
}

function getCurrentTrack($refreshedToken)
{
    $url = "https://api.spotify.com/v1/me/player/currently-playing";

    $curl = curl_init($url);
    curl_setopt($curl, CURLOPT_URL, $url);
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);

    $headers = array(
        "Accept: application/json",
        "Content-Type: application/json",
        "Authorization: Bearer $refreshedToken",
    );

    curl_setopt($curl, CURLOPT_HTTPHEADER, $headers);
    $resp = curl_exec($curl);
    curl_close($curl);
    return $resp;
}

if (!getCurrentTrack(refreshToken())) {
    echo "error";
} else {
    echo getCurrentTrack(refreshToken());
}

<#
    .SYNOPSIS
    Just a quick and dumb way to execute a node command withouth installing
    node locally.
    .PARAMETER Command
    String represantion of the command, for example
    'npm install msal @Azure Subscription Cleaner/msal-angular'
    .EXAMPLE
    .\Run-NodeCommand.ps1 -Command "yarn add msal @Azure Subscription Cleaner/msal-angular"
#>
param(
    [Parameter(Mandatory)][string]$Command
)
$ErrorActionPreference = "Stop"
Set-StrictMode -Version Latest
$par = $Command.Split()
docker-compose run tools $par

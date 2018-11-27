﻿using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class FootstepsScript : MonoBehaviour
{

  [FMODUnity.EventRef]
  public string inputsound;
  bool playerismoving;
  public float walkingspeed;

  void Update()
  {
    if (Input.GetAxis("Vertical") >= 0.01f || Input.GetAxis("Horizontal") >= 0.01f || Input.GetAxis("Vertical") <= -0.01f || Input.GetAxis("Horizontal") <= -0.01f)
    {
      playerismoving = true;
    }
    else if (Input.GetAxis("Vertical") == 0 || Input.GetAxis("Horizontal") == 0){
      playerismoving = false;
    }
  }

  void CallFootsteps(){
    if(playerismoving == true){
      FMODUnity.RuntimeManager.PlayOneShot(inputsound);
    }
  }

  void Start(){
    InvokeRepeating("CallFootsteps", 0, walkingspeed);
  }

  void OnDisable(){
    playerismoving = false;
  }
}

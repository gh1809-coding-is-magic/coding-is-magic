﻿using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class WinSoundScript : MonoBehaviour
{

  [FMODUnity.EventRef]
  public string inputsound;
  bool win;

  void Update()
  {

  }


  void Start()
  {

  }

  void OnDisable()
  {
    win = false;
  }
  void OnTriggerEnter(Collider other)
  {
    if (other.gameObject.name == "Win" )
    {

      FMODUnity.RuntimeManager.PlayOneShot(inputsound);

    }

  }
}



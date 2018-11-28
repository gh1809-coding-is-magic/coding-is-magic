using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class DeathSoundScript : MonoBehaviour
{

  [FMODUnity.EventRef]
  public string inputsound;
  bool fallIn;

  void Update()
  {
 
  }


  void Start()
  {

  }

  void OnDisable()
  {
    fallIn = false;
  }
  void OnTriggerEnter(Collider other)
  {
    if (other.gameObject.name == "Plane" )
    {

      FMODUnity.RuntimeManager.PlayOneShot(inputsound);

    }

  }
}


